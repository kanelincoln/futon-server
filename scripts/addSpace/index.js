const { PrismaClient } = require('@prisma/client');
// const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

const prisma = new PrismaClient();

async function createBorough(boroughName) {
  const borough = await prisma.borough.create({
    data: {
      name: boroughName,
    },
  });

  return borough;
};

async function fetchBoroughs() {
  const boroughs = await prisma.borough.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return boroughs;
};

// A function to seed the database using the provided JSON file
async function addSpace(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const spaceData = JSON.parse(fileContent);

  const boroughs = await fetchBoroughs();
  const boroughName = spaceData.borough;
  let borough = boroughs.find((b) => b.name === boroughName);

  // If the borough doesn't exist, create it
  if (!borough) {
    console.error(`Borough not found: ${boroughName}. Creating borough...`);
    borough = await createBorough(boroughName)
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });

    console.log(`Borough created: ${boroughName}.`);
  }

  console.log('Creating space...');
  const createdSpace = await prisma.space.create({
    data: {
      name: spaceData.name,
      boroughId: borough.id,
      type: spaceData.type,
      affordability: spaceData.affordability,
      wiFi: spaceData.wiFi,
      hotspot: spaceData.hotspot,
      loudness: spaceData.loudness,
      power: spaceData.power,
      size: spaceData.size,
      space: spaceData.space,
      busyness: spaceData.busyness,
      coffee: spaceData.coffee,
      comments: spaceData.comments,
      googleMaps: spaceData.googleMaps,
    },
  });

  for (const hoursData of spaceData.hours) {
    await prisma.hours.create({
      data: {
        day: hoursData.day,
        open: hoursData.open,
        close: hoursData.close,
        spaceId: createdSpace.id,
      },
    });
  }

  for (const imageData of spaceData.images) {
    await prisma.image.create({
      data: {
        url: imageData.url,
        spaceId: createdSpace.id,
      },
    });
  }

  console.log(`Space created: ${spaceData.name}.`);
}

// Execute the addSpace function with the file path provided as a command-line argument
(async () => {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Please provide a JSON file path as a command-line argument.');
    process.exit(1);
  }

  addSpace(filePath)
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
})();
