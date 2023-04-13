const { PrismaClient } = require('@prisma/client');
const { gql } = require('apollo-server-express');

const { testServer } = require('./testServer');

const prisma = new PrismaClient();

describe('boroughsWithSpaces', () => {
  beforeAll(async () => {
    // The database must be populated in advance.
    const borough = await prisma.borough.create({
      data: {
        name: 'Southwark'
      }
    });

    await prisma.space.create({
      data: {
        name: 'Co.',
        boroughId: borough.id,
        type: 'Café'
      }
    });
  });

  afterAll(async () => {
    /* Note:
        - Any tables relying on Foreign Key relationships need to be deleted prior to their dependency.
        - e.g. (Space needs to be deleted prior to Borough because rows in Space rely on a "boroughId" FK.) */
    await prisma.space.deleteMany();
    await prisma.borough.deleteMany();
  });

  it('returns an array of Boroughs that have at least one space associated with it;', async () => {
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

  it('each Borough in the array returns an array of Spaces associated with it.', async () => {
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

    expect(response.errors).toBeUndefined();
    expect(response.data.boroughsWithSpaces).toBeDefined();
    expect(response.data.boroughsWithSpaces[0].spaces).toBeDefined();
    expect(response.data.boroughsWithSpaces[0].spaces).toHaveLength(1);
  });
});