import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
//import { popularProds } from '../data'
import Product from './Product'

import axios from 'axios'


const Container = styled.div({

  padding: "20px",
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: "space-between"

})

const Products = ({ cat, filter, sort }) => {
  // console.log(cat,filter,sort)

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `https://hypee-1.herokuapp.com/api/products?category=${cat}` : "https://hypee-1.herokuapp.com/api/products");

         console.log(res)
        setProducts(res.data)
      } catch (error) {

      }
    }
    getProducts()
  }, [cat]);


  useEffect(() => {
    cat && setfilteredProducts(
      products.filter(item => Object.entries(filter).every(([key, value]) =>
        item[key].includes(value)))
    );
  }, [products, cat, filter])

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts(prev => [...prev].sort((a, b) => a.createdat - b.createdAt))
    }

    else if (sort === "asc") {
      setfilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price))
    }

    else {
      setfilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      {cat ? filteredProducts.map((el) => (
        <Product el={el} key={el.id} />
      )) : products.slice(0, 8).map((el) => (
        <Product el={el} key={el.id} />
      ))}
    </Container>
  )
}

export default Products