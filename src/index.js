const { createServer } = require('http');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start(); // Apollo must be started before it can be declared as middleware (below).

  apolloServer.applyMiddleware({
    app,
    path: '/'
  });

  httpServer.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || '4000'}${apolloServer.graphqlPath}`);
  });
};

startServer();