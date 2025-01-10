const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  description: String,
  price: Number,
});

const ProductModel = mongoose.model("Products", blogSchema);

module.exports = ProductModel