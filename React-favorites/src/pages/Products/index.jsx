import React from 'react'
import { useContext, useEffect, useState } from "react";
import { endpoints } from '../../services/constants';
import controller from '../../services/helper';
import { Button, Card, Col, Row } from 'antd';
import { Link } from "react-router-dom"
const { Meta } = Card;
import { FaHeart } from "react-icons/fa6";

import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from '../../context/Favoritest';

const Products = () => {
  const [data, setData] = useState([])

  const { toggleFavorites, favorites } = useContext(FavoritesContext)

  const getData = async () => {
    const resp = await controller.getAllData(endpoints.products)
    console.log(resp);
    setData(resp)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Row gutter={16}>
      {data && data.map((p) => {
        return (<Col className="gutter-row" span={6} key={p.id}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={p.title} src={p.images[0]} />}
          >

            <Meta title={<Link to={`${p.id}`}>{p.title}</Link>} description={<div>

              <p>Price: $ {p.price}</p>
              <p>{p.description.slice(0, 50)}</p>
              <span>


              <Button  onClick={() => toggleFavorites(p)}>
                 {favorites.find((q) => q.id === p.id) ? <FaHeart/> : <FaRegHeart />}
              </Button>


                {/* <FaRegHeart onClick={() => toggleFavorites(p)} /> */}
                {/* <FaHeart /> */}

              </span>
            </div>} />
          </Card>
        </Col>)
      })}
    </Row>
    </div>
  )
}

export default Products