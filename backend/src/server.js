const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const modules = require("./modules");

const app = express();

app.set("env", {});
app.set("x-powered-by", false);

const server = new ApolloServer({
  modules,
  context: ({ req }) => {
    return { context: req.headers };
  },
});

const bootstrap = async () => {
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });
};

bootstrap();

app.listen(4000, console.log(4000));
