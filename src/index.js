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
    path: '/api' // This is the GraphQL endpoint, which Apollo sets to '/graphql' by default.
  });

  httpServer.listen(4000, () => { // We may have to obtain this from process.env.PORT if deploying with Heroku.
    console.log(`Server is running on port 4000${apolloServer.graphqlPath}`);
  });
};

startServer();