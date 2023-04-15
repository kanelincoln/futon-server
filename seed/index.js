const { PrismaClient } = require('@prisma/client');

const seedData = require('./seedData');

const prisma = new PrismaClient();

async function seedDatabase() {
  for (const boroughData of seedData.boroughs) {
    const createdBorough = await prisma.borough.create({
      data: {
        name: boroughData.name,
      },
    });

    for (const spaceData of boroughData.spaces) {
      const createdSpace = await prisma.space.create({
        data: {
          name: spaceData.name,
          boroughId: createdBorough.id,
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
    }
  }  
};

seedDatabase()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });