const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Book {
        _id: ID
        title: String!
        author: String
        price: Float!
    }
    type RootQuery {
        books:[Book!]!
    }
    schema{
    query: RootQuery
    }
    `);
module.exports = schema;
