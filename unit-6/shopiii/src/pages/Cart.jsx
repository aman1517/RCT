
import { Add, Remove } from '@mui/icons-material'
import "./Register.css"
import React from 'react'
import styled from 'styled-components'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Salebox from '../component/Salebox'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Container=styled.div({

})

const Wrapper=styled.div({
padding:'20px'
})

const Title=styled.h1({
fontWeight:'300',
textAlign:'center'
})

const Top=styled.div({
display:'flex',
alignItems:'center',
justifyContent:'space-between'
})

const TopButton=styled.button({
padding:'10px',
fontWeight:'600',
cursor:'pointer'
})

const TopTexts=styled.div({

})

const TopText=styled.span({
textDecoration:'underline',
cursor:'pointer',
margin:'0px 10px'
})

const Bottom=styled.div({
display:'flex',
justifyContent:'space-between'
})

const Info=styled.div({
flex:'3'
})

const Product=styled.div({
display:'flex',
justifyContent:'space-between',
marginTop:'20px'
})

const ProductDetails=styled.div({
flex:"2",
display:'flex',
})

const Image=styled.img({
width:'200px',
height:'200px'

})

const Details=styled.div({
padding:'20px',
display:'flex',
flexDirection:'column',
justifyContent:'space-around'
})

const ProductName=styled.span({

})

const ProductId=styled.div({

})

const ProductSize=styled.span({

})

const PriceDetails=styled.div({
flex:'1',
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center'
})

const ProductAmount=styled.div({
display:'flex',
alignItems:'center',
marginBottom:'20px'
})

const ProductAmo=styled.div({
fontSize:'24px',
margin:'5px'
})

const ProductPrice=styled.div({
fontSize:'30px',
fontWeight:'200'
})



const Summary=styled.div({
flex:'1',
border:'0.7px solid lightgray',
borderRadius:"10px",
padding:"20px",
height:'50vh'
})

const SummaryTitle=styled.h1({
fontWeight:'200',

})

const SummaryIteam=styled.div({
margin:'30px 0px',
display:'flex',
justifyContent:'space-between'

})

const SummaryIteamText=styled.span({

})

const SummaryIteamPrice=styled.span({

})

const Button=styled.button({
width:'100%',
padding:'10px',
backgroundColor:'black',
color:"white",
cursor:"pointer"
})



const Cart = () => {
    const cart=useSelector(state=>state.cart)
  return (
    <Container>
        <Navbar/>
        <Salebox/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>


            <Bottom>
                <Info>
                    {cart.products.map(product=>(
                    <Product>
                        <ProductDetails>
                            <Image src={product.img}/>
                            <Details>
                                <ProductName><b>Product:</b>{product.title}</ProductName>
                                <ProductId><b>ID:</b>{product._id}</ProductId>
                                <ProductSize><b>Size:</b>{product.size}</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmount>
                                <Add/>
                                <ProductAmo>{product.quantity}</ProductAmo>
                                <Remove/>
                            </ProductAmount>
                            <ProductPrice>RS {product.price * product.quantity} </ProductPrice>
                        </PriceDetails>
                    </Product>
                    ))}
<hr/>
              
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryIteam>
                        <SummaryIteamText>Subtotal</SummaryIteamText>
                        <SummaryIteamPrice>RS {cart.total}</SummaryIteamPrice>
                    </SummaryIteam>

                    <SummaryIteam>
                        <SummaryIteamText>Estimated Shipping</SummaryIteamText>
                        <SummaryIteamPrice>RS 149</SummaryIteamPrice>
                    </SummaryIteam>

                    <SummaryIteam>
                        <SummaryIteamText>Shipping Discount</SummaryIteamText>
                        <SummaryIteamPrice>RS -149</SummaryIteamPrice>
                    </SummaryIteam>

                    <SummaryIteam className='total'>
                        <SummaryIteamText >Total</SummaryIteamText>
                        <SummaryIteamPrice>RS {cart.total}</SummaryIteamPrice>
                    </SummaryIteam>
                    <Link to="/checkout"><Button>CHECKOUT NOW</Button></Link>
                </Summary>
            </Bottom>
        </Wrapper>
        
        <Footer/>
    </Container>
  )
}

export default Cart