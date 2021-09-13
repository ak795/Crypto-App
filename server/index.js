const { ApolloServer, gql } = require('apollo-server');
const { GraphQLJSONObject } = require('graphql-type-json');
const CryptoAPI = require('./crypto-api');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = require('./schema.graphql');

const resolvers = {
    Query: {
      coins: async (_, __, { dataSources }) => {
          return dataSources.cryptoAPI.getLatestListing();
      }
    },
    JSONObject: GraphQLJSONObject 
  };
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
            cryptoAPI: new CryptoAPI()
        }
    },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

