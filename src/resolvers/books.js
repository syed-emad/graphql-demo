const Book = require("../models/Book");
const books = {
  books: async () => {
    try {
      const books = await Book.find({});
      return books;
    } catch (err) {
      console.log("Error occured in books resolver");
      throw err;
    }
  },
  createBook: async (args) => {
    let { book } = args;
    let payload = {
      title: book.title,
      price: book.price,
      author: book.author,
    };
    console.log("payload", payload);
    const bookSchema = new Book(payload);
    const response = await bookSchema.save();
    return {
      ...response._doc,
      _id: response.id,
    };
  },
};
module.exports = books;
