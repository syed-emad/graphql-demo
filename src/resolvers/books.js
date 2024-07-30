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
    return response;
  },
  updateBook: async ({ book, id }) => {
    const response = await Book.findByIdAndUpdate(
      { _id: id },
      { $set: { ...book } },
      { new: true }
    );
    return response;
  },
  deleteBook: async ({ id }) => {
    try {
      const deletedBook = await Book.findByIdAndDelete({ _id: id });
      if (!deletedBook) {
        return { message: "Book not found", success: false };
      }
      return { message: "Book deleted", success: true, deletedBook };
    } catch (e) {
      console.log("Error in deleteBook", e);
    }
  },
};
module.exports = books;
