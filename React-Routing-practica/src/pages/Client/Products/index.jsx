import React, { useContext, useState, useEffect } from 'react';
import { enpoints } from '../../../services/constants';
import controller from '../../../services/helper';
import { Button, Card, Col, Row } from 'antd';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from '../../../context/Favoritest';
import { Input } from "antd";


import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel, MenuItem } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { Helmet } from 'react-helmet-async';
import { BasketContext } from '../../../context/Basket';
import { FaShoppingBasket } from "react-icons/fa";

const { Meta } = Card;

const Products = () => {
  const { favorites, Wishproducts, clearFavorites } = useContext(FavoritesContext);
  const [statedata, setProducts] = useState([]);
  const [sortValue, setSortValue] = useState("default");
  const [inputValue, setInputValue] = useState("");
  const { addToBasket } = useContext(BasketContext)



  const filteredProducts = statedata.filter((p) =>
    p.title.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  const sortedProducts = filteredProducts.toSorted((a, b) => {
    switch (sortValue) {
      case "priceAsc":
        return a.price - b.price;
      case "priceDesc":
        return b.price - a.price;
      case "titleAsc":
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      case "titleDesc":
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
    }
  });

  const Getdata = async () => {
    const data = await controller.getAllData(enpoints.products);
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    Getdata();
  }, []);

  return (




    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
      <Helmet>
        <title>Products</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0px 30px 0px', gap: '190px' }}>
        <div>
          <label htmlFor="Basic">Search</label>
          <Input
            placeholder="Basic usage"
            id='Basic'
            style={{ width: '500px', margin: '10px 10px', display: 'inline-block' }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.trim())}
          />
        </div>
        <FormControl fullWidth style={{ width: '300px' }}>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>{" "}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sort Products"
            onChange={(e) => {
              setSortValue(e.target.value);
            }}
          >
            <MenuItem value={"default"}>Default</MenuItem>
            <MenuItem value={"priceAsc"}>By Price Asc</MenuItem>
            <MenuItem value={"priceDesc"}>By Price Desc</MenuItem>
            <MenuItem value={"titleAsc"}>By Title Asc</MenuItem>
            <MenuItem value={"titleDesc"}>By Title Desc</MenuItem>
          </Select>
        </FormControl>
      </div>



      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Row gutter={16} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {sortedProducts && sortedProducts.map((p) => (
            <Col className="gutter-row" span={6} key={p.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                hoverable
                style={{ width: 300, marginBottom: '30px' }}
                cover={<img alt={p.title} src={p.image} width={100} height={280} />}
              >
                <Meta
                  title={<Link to={`${p.id}`}>{p.title}</Link>}
                  description={
                    <div>
                      <p>Price: $ {p.price}</p>
                      <p>{p.description.slice(0, 50)}</p>

                      <span>
                        <Button onClick={() => Wishproducts(p)}>
                          {favorites.find((q) => q.id === p.id) ? <FaHeart /> : <FaRegHeart />}
                        </Button>
                        
                      </span>
                      <span><Button onClick={() => { addToBasket(p) }}><FaShoppingBasket
                          style={{ color: 'green', fontSize: '24px', cursor: 'pointer' }} // Example styling
                          onClick={() => addToBasket(p)}
                        >
                          Add to Cart
                        </FaShoppingBasket></Button></span>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Products;
