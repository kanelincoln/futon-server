const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
      boroughsWithSpaces: [Borough!]
    }

    type Borough {
      id: ID!
      name: String!
      spaces: [Space!]
    }

    type Query {
      getSpacesByBoroughId(boroughId: Int!): [Space!]!
    }

    type Space {
      id: ID!
      name: String!
      boroughId: Int!
    }
  `;

  module.exports = { typeDefs };