const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const port = 4000;
// Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
async function startServer(app) {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer(app);
app.listen({ port }, () => {
  console.log(`Server is running at http://localhost:${port}${server.graphqlPath}`);
});
