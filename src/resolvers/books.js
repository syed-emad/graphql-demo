const books = {
  books: async () => {
    try {
      let books = [
        { _id: "123", title: "Something", author: "String", price: 124 },
      ];
      return books;
    } catch (err) {
      console.log("Error occured in books resolver");
      throw err;
    }
  },
  createBook: async (args, req) => {},
};
module.exports = books;
