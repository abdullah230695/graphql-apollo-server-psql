const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { typeDefs } = require("./src/schema/schema");
const { resolvers } = require("./src/resolvers/resolver");

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(3000, () => {
    console.log(`🚀 Server started on port : 3000`);
  });
}

startServer();
