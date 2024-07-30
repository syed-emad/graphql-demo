const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Book {
        _id: ID
        title: String!
        author: String
        price: Float!
    }

    type BookInput {
        title: String
        author: String
        price: Float
    }

    type Query {
        books:[Book!]!
    }
    
    type Mutation {
        createBook(name: String): Book
    }
  `);
module.exports = schema;
