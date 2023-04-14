const { PrismaClient } = require('@prisma/client');
const { gql } = require('apollo-server-express');

const { testServer } = require('./testServer');
const { createTestSpace } = require('./testHelpers');

const prisma = new PrismaClient();

describe('boroughsWithSpaces', () => {
  afterEach(async () => {
    await prisma.hours.deleteMany();
    await prisma.image.deleteMany();
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

  it('returns any Hours associated with each Space;', async () => {
    await createTestSpace(prisma);

    const query = gql`
      query {
        boroughsWithSpaces {
          id
          name
          spaces {
            id
            name
            hours {
              day
            }
          }
        }
      }
    `;

    const response = await testServer.executeOperation({ query });
    const space = response.data.boroughsWithSpaces[0].spaces[0];

    expect(response.errors).toBeUndefined();
    expect(space.hours).toHaveLength(1);
  });

  it('returns any Images associated with each Space.', async () => {
    await createTestSpace(prisma);

    const query = gql`
      query {
        boroughsWithSpaces {
          id
          name
          spaces {
            id
            name
            hours {
              day
            }
            images {
              url
            }
          }
        }
      }
    `;

    const response = await testServer.executeOperation({ query });
    const images = response.data.boroughsWithSpaces[0].spaces[0].images;

    expect(response.errors).toBeUndefined();
    expect(images).toHaveLength(1);
  });
});