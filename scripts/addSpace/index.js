const path = require('path');
const fs = require('fs');

const { PrismaClient } = require('@prisma/client');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

function isImageFile(file) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
  const fileExtension = path.extname(file).toLowerCase();

  return imageExtensions.includes(fileExtension);
};

function getImagesFromDir(dir) {
  if (!fs.existsSync(dir)) {
    return null;
  }

  const files = fs.readdirSync(dir);
  const images = files.filter(isImageFile);
  return images;
};

async function uploadFileToS3(bucketName, filePath) {
  const fileStream = fs.createReadStream(filePath);
  const fileName = path.basename(filePath);

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileStream,
  };

  const command = new PutObjectCommand(params);

  try {
    await s3Client.send(command);
    const fileUrl = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
    return fileUrl;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function uploadAllFromDir(imagesDir) {
  const images = getImagesFromDir(imagesDir);

  if (images === null) {
    console.error('Error: The images directory does not exist.');
    return;
  }

  if (images.length === 0) {
    console.error('Error: The images directory is empty or contains no image files.');
    return;
  }

  const bucketName = 'tryfuton';
  for (const image of images) {
    const imagePath = path.join(imagesDir, image);
    try {
      const fileUrl = await uploadFileToS3(bucketName, imagePath);
      console.log(`Uploaded ${imagePath} to ${fileUrl}`);
    } catch (error) {
      console.error(`Error uploading ${imagePath}:`, error);
      process.exit(1);
    }
  }
};

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

async function createSpaceInDatabase(spaceData, boroughId, imagesDir) {
  const images = getImagesFromDir(imagesDir);

  console.log('Creating space...');
  const createdSpace = await prisma.space.create({
    data: {
      name: spaceData.name,
      boroughId: boroughId,
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

  for (const image of images) {
    const imagePath = `https://tryfuton.s3.eu-west-2.amazonaws.com/${image}`;
    await prisma.image.create({
      data: {
        url: imagePath,
        spaceId: createdSpace.id,
      },
    });
  }

  console.log(`Space created: ${spaceData.name}.`);
}

async function addSpace(filePath, imagesDir) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const spaceData = JSON.parse(fileContent);

  const boroughs = await fetchBoroughs();
  const boroughName = spaceData.borough;
  let borough = boroughs.find((b) => b.name === boroughName);

  await uploadAllFromDir(imagesDir);
  
  if (!borough) {
    console.error(`Borough not found: ${boroughName}. Creating borough...`);

    try {
      borough = await createBorough(boroughName)
    } catch (error) {
      console.error(error);
      process.exit(1);
    }

    console.log(`Borough created: ${boroughName}.`);
  }



  try {
    await createSpaceInDatabase(spaceData, borough.id, imagesDir);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Execute the addSpace function with the file path provided as a command-line argument
(async () => {
  const baseDir = process.argv[2];
  const filePath = path.join(baseDir, 'data.json'); // e.g ./spaceData/data.json
  const imagesDir = path.join(baseDir, 'images'); // e.g ./spaceData/images

  if (!baseDir) {
    console.error('Please provide a JSON file path as a command-line argument.');
    process.exit(1);
  }

  try {
    await addSpace(filePath, imagesDir)
    prisma.$disconnect();

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
