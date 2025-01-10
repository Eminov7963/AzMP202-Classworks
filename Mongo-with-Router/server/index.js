const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute")
const dotenv = require("dotenv"); 
dotenv.config();
const app = express();

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.use("/api/products", productRoute);

app.get("/", async (req, res) => {
  res.send("Hello");
});
mongoose
  .connect(
   DB_URL
  )
  .then(() => {
    app.listen(PORT, (DB_URL) => {
      console.log(`url is http://localhost:${PORT}`);
    });

    console.log("Connected!");
  });
