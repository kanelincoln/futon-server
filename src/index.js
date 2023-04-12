import { createServer } from 'http';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello, world.',
    }
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
    console.log(`Server is running on ${process.env.PORT || '4000'}${apolloServer.graphqlPath}`);
  });
};

startServer();