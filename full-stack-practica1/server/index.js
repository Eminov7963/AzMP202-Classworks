const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())
const cors = require("cors")
app.use(cors())
const dotenv = require("dotenv")
dotenv.config();
const ProductRouter = require("./routers/productsRouters")

app.use("/products", ProductRouter)
const DB_URL =
  "mongodb+srv://eminovemin199:eminovemin199@eminfullstack-project.mbhs8.mongodb.net/fullStack-practica?retryWrites=true&w=majority&appName=EminFullStack-Project";
const Port = 8080







mongoose.connect(DB_URL).then(() => {
  app.listen(Port, () => {
    console.log(`http://localhost:${Port}`);
  });
  console.log("Connected!");
});