import styled from 'styled-components'
import React from 'react'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Container=styled.div({
    flex:"1",
    margin:'5px',
    minWidth:"280px",
    height:'350px',
    display:"flex",
    alignItems:'center',
    justifyContent:"center",
    backgroundColor:'beige',
    position:"relative"
})

const Circle=styled.div({

    width:'200px',
    height:'200px',
    borderRadius:"50%",
    backgroundColor:'whitesmoke',
    position:"absolute"
})

const Image=styled.img({
    height:'75%',
    zIndex:'2'
})
const Info=styled.div({
    width:'100%',
    height:'100%',
    position:'absolute',
    top:'0',
    left:'0',
    backgroundColor:"rgba(0,0,0,0.2)",
    zIndex:'3',
    display:'flex',
    alignItems:"center",
    justifyContent:'center'
    
})
const Icon=styled.div({
    width:'40px',
    height:'40px',
    borderRadius:'50%',
    backgroundColor:'wheat',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'10px',
    transition:'all 0.5s ease'
})





const Product = ({el}) => {
  return (
    <Container>
        <Circle/>
        <Image src={el.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>

            <Icon>
                <Link to={`/product/${el._id}`}>
               
                <SearchOutlined/>
                </Link>
            </Icon>

            <Icon className='icon'>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product