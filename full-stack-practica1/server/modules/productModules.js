const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
  oldprice: Number,
  ratings: Number,
});

const BlogModel = mongoose.model("products", blogSchema)

module.exports = BlogModel  