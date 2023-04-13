const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('../src/typeDefs');
const { resolvers } = require('../src/resolvers');

const testServer = new ApolloServer({ typeDefs, resolvers });

module.exports = { testServer };