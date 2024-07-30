const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Book {
        _id: ID
        title: String!
        author: String
        price: Float!
    }

    input BookInput {
        title: String
        author: String
        price: Float
    }

    type Query {
        books:[Book!]!
    }
    
    type DeleteResponse{
     deletedBook: Book
     success: Boolean
     message: String
    }
    type Mutation {
        createBook(book: BookInput): Book
        updateBook(book: BookInput, id: String!): Book
        deleteBook(id:String): DeleteResponse
    }
  `);
module.exports = schema;
