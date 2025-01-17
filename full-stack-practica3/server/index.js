const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());
const productRouter = require("./routers/productRouter")

const DB_URL = "mongodb+srv://eminovemin199:eminovemin199@eminfullstack-project.mbhs8.mongodb.net/fullStack-practica?retryWrites=true&w=majority&appName=EminFullStack-Project";
const Port = 8080;
 app.use("/products", productRouter)


mongoose.connect(DB_URL).then(() => {
  app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);
  });
  console.log("Connected!");
});
