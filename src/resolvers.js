const { PrismaClient } = require('@prisma/client');
const Airtable = require('airtable');

const prisma = new PrismaClient();
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appuFvhFBMDmeUFPo');

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
  },

  Mutation: {
    addEmailToAirtable: async (_, { email }) => {
      try {
        await base('List').create([
          {
            fields: {
              'Email address': email,
            },
          },
        ]);
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    },
  },
};

module.exports = { resolvers };