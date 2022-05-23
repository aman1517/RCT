import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Container= styled.div({
  
  height:'60px'
})

const Wrapper= styled.div({
padding:"10px 20px",
display:"flex",
alignItems:"center",
justifyContent:"space-between"

})

const Left =styled.div({
flex:"1",
alignItems:"center"
})

const Lang=styled.span({
  fontSize:"14px",
  cursor:"pointer"
})

const SearchContainer=styled.div({
  border:"0.7px solid gray",
  display:"flex",
  alignItems:"center",
  marginLeft:"35px",
  padding:"5px",
  marginTop:"-20px",
  width:"40%",


})

const Input=styled.input({
border:"none"
})

const Center =styled.div({
  flex:"1",
  textAlign:"center",
  fontWeight:'bolder'
})

const Logo=styled.h1({
  fontWeight:"bold"
})

const Right =styled.div({
  flex:"1",
  display:"flex",
  alignItems:"center",
  justifyContent:"flex-end"
})

const MenuIteam=styled.div({
  fontSize:"14px",
  cursor:"pointer",
  marginLeft:"25px"
})



const Navbar = () => {
  const quantity=useSelector(state=>state.cart.quantity)

  //console.log(quantity)

  return (
    <Container>
      <Wrapper>
      <Left><Lang>EN</Lang>
      <SearchContainer>
        <Input placeholder='Search'/>
         <SearchIcon style={{color:"gray"}} />
         </SearchContainer>
      </Left>

      <Center>
        <Logo>HyPee</Logo>

      </Center>


      <Right>
      
      <Link to="/register">  <MenuIteam style={{color:"black",fontWeight:"900", letterSpacing:"1.5px", textDecoration:"none"}}>Register</MenuIteam></Link>
        <Link to='/login'>
        <MenuIteam style={{color:"black",fontWeight:"900", letterSpacing:"1.5px", textDecoration:"none"}}>Sign in</MenuIteam>
        </Link>
        

        <Link to="/cart">
        <MenuIteam>
        <Badge badgeContent={quantity} color="primary">
        <ShoppingCartOutlinedIcon/>
</Badge>
        </MenuIteam>
        </Link>



      </Right>
      </Wrapper>
       
    </Container>
  )
}

export default Navbar