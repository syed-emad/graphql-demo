var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { buildSchema } = require("graphql");
var { ruruHTML } = require("ruru/server");
var app = express();
var schema = require("./schemas/index");
var rootResolver = require("./resolvers/index");
const { connectToMongo } = require("./database");
require("dotenv").config();

connectToMongo();
const root = {
  books() {
    return "Hello World";
  },
};
app.all("/graphql", createHandler({ schema: schema, rootValue: rootResolver }));
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});
app.listen(4000, () => {
  console.log("GraphQl Server started on port 4000");
});
