const { gql } = require('apollo-server-express');

const { testServer } = require('./testServer');

describe('Query: boroughsWithSpaces', () => {
  it('returns an array of boroughs that have at least one space associated with it;', async () => {
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
    expect(response.data.boroughsWithSpaces).toHaveLength(1);
  });
});