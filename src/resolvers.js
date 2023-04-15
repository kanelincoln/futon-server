const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    boroughsWithSpaces: async () => {
      return await prisma.borough.findMany({
        orderBy: { name: 'asc' },
        where: { spaces: { some: {} } },
        include: { spaces: true }
      });
    },
  },

  Borough: {
    spaces: async (parent) => {
      return await prisma.space.findMany({
        where: { boroughId: parent.id },
      });
    },
  },

  Space: {
    borough: async (parent) => {
      return await prisma.borough.findUnique({
        where: { id: parent.boroughId },
      });
    },
    hours: async (parent) => {
      return await prisma.hours.findMany({
        where: { spaceId: parent.id },
      });
    },
    images: async (parent) => {
      return await prisma.image.findMany({
        where: { spaceId: parent.id }
      });
    }
  }
};

module.exports = { resolvers };