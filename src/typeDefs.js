const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Borough {
      id: ID!
      name: String!
      spaces: [Space!]
    }
    
    type Hours {
      id: ID!
      spaceId: Int!
      day: String!
      open: String!
      close: String!
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
      hours: [Hours!]
      images: [Image!]
      comments: String
      googleMaps: String!
    }

    type Image {
      id: ID!
      spaceId: Int!
      url: String!
    }

    type Query {
      boroughsWithSpaces: [Borough!]
    }
    
    type Mutation {
      addEmailToAirtable(email: String!): String
    }
  `;

  module.exports = { typeDefs };