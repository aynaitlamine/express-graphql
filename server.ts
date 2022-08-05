import express from "express";
import {ApolloServer} from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const app = express();

const port = 1337;

async function startServer() {
  const server = new ApolloServer({typeDefs, resolvers});
  await server.start();
  await server.applyMiddleware({app});
}

startServer();

app.listen(port, () => {
  console.log(
    `🚀 GraphQL server ready at http://localhost:${port}/graphql`
  );
});
