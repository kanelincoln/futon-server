const { createServer } = require('http');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageDisabled } = require('@apollo/server/plugin/disabled');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageDisabled()]
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