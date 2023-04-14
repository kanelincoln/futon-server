const { PrismaClient } = require('@prisma/client');
const { gql } = require('apollo-server-express');

const { testServer } = require('./testServer');
const { createTestSpace } = require('./testHelpers');

const prisma = new PrismaClient();

describe('boroughsWithSpacesAndOpeningHours', () => {
  afterEach(async () => {
    await prisma.openingHours.deleteMany();
    await prisma.space.deleteMany();
    await prisma.borough.deleteMany();
  });

  it('returns an array of Boroughs that have at least one space associated with it;', async () => {
    await createTestSpace(prisma);

    const query = gql`
      query {
        boroughsWithSpaces {
          id
          name
        }
      }
    `;

    const response = await testServer.executeOperation({ query });

    expect(response.errors).toBeUndefined();
    expect(response.data.boroughsWithSpaces).toBeDefined();
    expect(response.data.boroughsWithSpaces).toHaveLength(1);
  });

  it('returns an array of Spaces associated with each Borough;', async () => {
    await createTestSpace(prisma);

    const query = gql`
      query {
        boroughsWithSpaces {
          id
          name
          spaces {
            id
            name
          }
        }
      }
    `;

    const response = await testServer.executeOperation({ query });
    const { boroughsWithSpaces } = response.data;

    expect(response.errors).toBeUndefined();
    expect(boroughsWithSpaces[0].spaces).toHaveLength(1);
  });

  it('returns any OpeningHours associated with each Space.', async () => {
    await createTestSpace(prisma);

    const query = gql`
      query {
        boroughsWithSpaces {
          id
          name
          spaces {
            id
            name
            openingHours {
              day
            }
          }
        }
      }
    `;

    const response = await testServer.executeOperation({ query });
    const space = response.data.boroughsWithSpaces[0].spaces[0];

    expect(response.errors).toBeUndefined();
    expect(space.openingHours).toHaveLength(1);
  })
});