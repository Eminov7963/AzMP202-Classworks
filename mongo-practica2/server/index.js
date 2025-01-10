const express = require('express')
const app = express()
const port = 8080

const mongoose = require("mongoose");

const { Schema } = mongoose;
const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  });


const ProductModel = mongoose.model("Products", ProductSchema);

app.get("/products", async (req, res) => {
    try {
      const products = await ProductModel.find({});
      res.status(200).json({ data: products, message: "success!" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });

  app.get("/", async (req, res) => {
    res.send("Hello")
  });

  app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
          return res
            .status(404)
            .json({ message: "failed to delete! | product not found!" });
        }
        res.status(200).json({
          deletedProduct: deletedProduct,
          message: "deleted successfully!",
        });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
  });

  app.get("/", async (req, res) => {
    res.send("Hello")
  });



mongoose
  .connect(
    "mongodb+srv://eminovemin199:eminovemin199@cluster0.jqmrc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(
        ` url is http://localhost:${port}`
      );
    });
  });