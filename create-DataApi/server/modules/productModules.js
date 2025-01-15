const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, 
  description: String,
  price: Number,
  oldPrice: Number,
  stars: Number,
  
});

const BlogModel = mongoose.model("blogs", blogSchema)

module.exports = BlogModel