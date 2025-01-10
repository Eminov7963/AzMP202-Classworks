import React, { useContext } from 'react'
import { Card, Col, Row } from 'antd';
import { FaHeart } from "react-icons/fa6";
const { Meta } = Card;
import { Link } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa6";
import { FavoritesContext } from '../../../context/Favoritest';
import { Helmet } from 'react-helmet-async';
const Favorites = () => {
  const { favorites, Wishproducts, clearFavorites } = useContext(FavoritesContext)

  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Row gutter={16}>
        {favorites.length > 0 && favorites.map((p) => {
          return <Col className="gutter-row" span={6} key={p.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={p.title} src={p.image} />}
            >

              <Meta title={<Link to={`${p.id}`}>{p.title}</Link>} description={<div>

                <p>Price: $ {p.price}</p>
                <p>{p.description.slice(0, 50)}</p>
                <span>

                  <FaHeart onClick={() => Wishproducts(p)} />


                </span>
              </div>} />
            </Card>
          </Col>
        })}
      </Row>
    </>
  )
}

export default Favorites