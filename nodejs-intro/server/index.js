const express = require('express')
const app = express()
const cors = require("cors");
const port = 8080
const { v4: uuidv4 } = require("uuid");
	
app.use(express.json())
app.use(cors());
let products = [
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];
let counter = 1000;

app.get("/",(req,res)=>{
  res.send("Hello World")
})

app.get("/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send({
      data: products,
      message: "success",
      error: null,
    });
  } else {
    res.status(204).send({
      data: [],
      message: "data is empty!",
    });
  }
});
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === +id);
  if (product !== undefined) {
   
    res.status(200).send({
      data: product,
      message: "success",
    });
  } else {
    res.status(404).send({
      message: "not found!",
    });
  }
});
app.delete("/products/:id", (req, res)=>{
  const {id} =  req.params;
  const idx = products.findIndex((p)=>p.id === +id)
  if(idx === -1){
    res.status(404).send({
      message: "no such product to delete!"
    })
  }
  else{
    const deleted = products.splice(idx,1)
    res.status(200).send({
      data: deleted,
      products: products,
      message: "success",
    })
  }
})

app.post("/products", (req, res) => {
  const { name, description} = req.body;

  const newProduct = {
    id: uuidv4(),
    name,
    description,
  };

  products.push(newProduct);
  res.status(201).send({
    message: "successfully posted product!",
    newProduct,
  });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, description,} = req.body;

  const idx = products.findIndex((p) => p.id === +id);

  if (idx !== -1) {
    const updatedProduct = {
      id: +id,
      name,
      description,
    };
    products[idx] = updatedProduct;

    res.status(200).send({
      message: "successfully updated!",
      updatedProduct,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
});

app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  const idx = products.findIndex((p) => p.id === +id);

  if (idx !== -1) {
    if (name !== undefined) {
      products[idx].name = name;
    }
    
    if (description !== undefined) {
      products[idx].description = description;
    }
    res.status(200).send({
      message: "successfully updated!",
      updatedProduct: products[idx],
      products,
    });
  } else {
    res.status(404).send({ message: "not found" });
  }
});

app.listen(port, () => {
  console.log(`Link:  http://localhost:${port}`);
});