const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    boroughsWithSpaces: async () => {
      return await prisma.borough.findMany({
        where: {
          spaces: {
            some: {}
          },
        },

        include: {
          spaces: true
        }
      })
    }
  },
};

module.exports = { resolvers };