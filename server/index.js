const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { serverPort } = require("./commons/constants");
const connectDatabase = require("./database/connection");
const databaseMethod = require("./database/method");

async function startServer(server, app) {
  await server.start();
  server.applyMiddleware({ app });
}

// Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Connect MongoDB
connectDatabase();

// Setup server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ databaseMethod })
});
const app = express();
startServer(server, app);

app.listen({ port: serverPort }, () => {
  console.log(`Server is running at http://localhost:${serverPort}${server.graphqlPath}`);
});
