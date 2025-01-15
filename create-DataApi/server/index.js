const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Productsrouter = require("./routers/productRouters") 
const dotenv = require("dotenv");
dotenv.config()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const BaseUrl = process.env.BaseUrl
const Port = process.env.Port

app.use("/products", Productsrouter)

mongoose.connect(BaseUrl)
  .then(() => {
    app.listen(Port, () => {
        console.log(`http://localhost:${Port}`)
      })
    console.log('Connected!')});