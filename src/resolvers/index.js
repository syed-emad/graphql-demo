const booksResolver = require("./books");
const rootResolver = {
  ...booksResolver,
};
module.exports = rootResolver;
