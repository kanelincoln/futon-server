const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    boroughsWithSpaces: async () => {
      return await prisma.borough.findMany({
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
    openingHours: async (parent) => {
      return await prisma.openingHours.findMany({
        where: { spaceId: parent.id },
      });
    },
  }
};

module.exports = { resolvers };