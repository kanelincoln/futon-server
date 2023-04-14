const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Borough {
      id: ID!
      name: String!
      spaces: [Space!]
    }
    
    type OpeningHours {
      id: ID!
      spaceId: Int!
      day: String!
      openTime: String!
      closeTime: String!
    }

    type Space {
      id: ID!
      name: String!
      boroughId: Int!
      borough: Borough!
      affordability: Int!
      type: String!
      wiFi: String!
      loudness: Int!
      power: Int!
      size: Int!
      space: Int!
      busyness: Int!
      coffee: Int!
      hotspot: Int!
      openingHours: [OpeningHours]
      rules: String!
      googleMaps: String!
    }

    type Query {
      boroughsWithSpaces: [Borough!]
    }
  `;

  module.exports = { typeDefs };