import {Link} from "react-router-dom"
import React from 'react'
import  styled from 'styled-components'


const Container=styled.div({

    flex:"1",
    margin:"5px",
    height:"70vh",
    position:"relative"
})

const Image=styled.img({

    width:"100%",
    height:'100%',
    objectFit:"cover"
})

const Info=styled.div({
    position:"absolute",
    width:"100%",
    height:'100%',
    top:"0",
    left:"0",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
})
const Title=styled.h1({
    color:"black",marginBottom:"20px",
    backgroundColor:""
})
const Button=styled.button({
    cursor:"pointer",
    border:"none",
    padding:"10px 15px",
    backgroundColor:"white",
    color:"gray",
    fontWeight:"600"

})

const CategoryIteam = ({iteam}) => {
  return (
    <Container>
        <Link to={`/products/${iteam.category}`}>
        <Image src={iteam.imgUrl}/>
        <Info>
            <Title>{iteam.category}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryIteam