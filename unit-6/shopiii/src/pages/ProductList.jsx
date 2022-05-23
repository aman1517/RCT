import styled from 'styled-components'
import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Salebox from '../component/Salebox'

import Newsletter from '../component/Newsletter'
import Footer from '../component/Footer'
import Products from '../component/Products'
import { useLocation } from 'react-router-dom'


const Container=styled.div({

})

const Title=styled.h1({
margin:'20px'
})

const Filterbox=styled.div({
display:"flex",
justifyContent:"space-between"
})

const Filter=styled.div({
margin:'20px'
})

const FilterText=styled.div({
    fontSize:"20px",
    fontWeight:'600',
    marginRight:'20px'
})

const Select=styled.select({
padding:'5px 10px',
marginRight:'20px'
})
const Option=styled.option({
    padding:'5px 9px'
})

const ProductList = () => {
    const location =useLocation();
    const cat= location.pathname.split("/")[2];
    const [filter,setFilter]=useState({});
    const [sort, setSort]=useState("newest")


    const handlefilters=(e)=>{

        const value= e.target.value;

        setFilter({
            ...filter,
            [e.target.name]:value,

        })
    }
   // console.log(filter)
  return (
    <Container>
        <Salebox/>
        <Navbar/>
        <Title>
            {cat}
        </Title>
        <Filterbox>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handlefilters}>
                <Option disabled >Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Green</Option>
                <Option>Blue</Option>
                <Option>Gray</Option>
                <Option>Yellow</Option>
            </Select>
            

            <Select name='size' onChange={handlefilters} >
                <Option disabled>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>    
            </Select>
            </Filter>


            <Filter><FilterText>Sort Products:</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)} >
                <Option value='newest' >Newest</Option>
                <Option value='asc'>Price(asc)</Option>
                <Option value='dsc'>Price(dsc)</Option>                
            </Select>
            </Filter>
            

        </Filterbox>

        <Products cat={cat} filter={filter} sort={sort}/>
        <Newsletter/>
        <Footer/>

    </Container>
  )
}

export default ProductList