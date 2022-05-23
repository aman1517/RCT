
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import "./Register.css"


const Container=styled.div({
    width:'100vw',
    height:'100vh',
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    })
    
    const Wrapper=styled.div({
    padding:'20px',
    width:'25%',
    backgroundColor:"whitesmoke"
    })
    
    const Title=styled.h1({
    fontSize:'30px',
    fontWeight:'300'
    })
    
    const Form=styled.form({
    display:"flex",
    flexDirection:'column'
    })
    
    const Input=styled.input({
    flex:'1',
    minWidth:'40%',
    margin:"10px 0px",
    padding:'10px'
    })
    
    
    
    const Button=styled.button({
    width:'40%',
    border:'none',
    padding:"15px 20px",
    backgroundColor:'teal',
    color:'whitesmoke',
    cursor:'pointer',
    marginBottom:'10px'
    })

const Link=styled.a({
margin:'5px 0px',
fontSize:'12px',
textDecoration:'underline',
cursor:'pointer'

}) 


const Login = () => {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const dispatch= useDispatch();
  const {isFetching, error}= useSelector((state)=>state.user);


  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch,{username,password});
  }




  return (
    <Container className='loginbox' >
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>

                <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)} />
               
                <Input placeholder="Password" type="password" onChange={(e)=> setPassword(e.target.value)}/>
               
                <Button onClick={handleClick} >LOGIN</Button>
                <Link>Do not you remember the password?</Link>
                <Link>Create a new Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login