const { createServer } = require('http');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { PrismaClient } = require('@prisma/client');

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);
  const prisma = new PrismaClient();

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

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start(); // Apollo must be started before it can be declared as middleware (below).

  apolloServer.applyMiddleware({
    app,
    // This is the GraphQL endpoint, which Apollo sets to '/graphql' by default.
    // It is set to '/' for now because it is hosted at the domain 'api.tryfuton.com'.
    path: '/'
  });

  httpServer.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || '4000'}${apolloServer.graphqlPath}`);
  });
};

startServer();