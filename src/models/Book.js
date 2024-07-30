const { Schema, default: mongoose } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
