
import React, { useState } from 'react'
import styled from 'styled-components'
import "./Register.css"
import axios from "axios"
import {useHistory} from "react-router-dom"


const Container = styled.div({
  width: '100vw',
  height: '100vh',
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const Wrapper = styled.div({
  padding: '20px',
  width: '40%',
  backgroundColor: "whitesmoke"
})

const Title = styled.h1({
  fontSize: '30px',
  fontWeight: '300'
})

const Form = styled.form({
  display: "flex",
  flexWrap: 'wrap'
})

const Input = styled.input({
  flex: '1',
  minWidth: '40%',
  margin: "20px 10px 0px 0px",
  padding: '10px'
})

const Agreement = styled.p({
  fontSize: '13px',
  margin: '20px 0px'
})

const Button = styled.button({
  width: '40%',
  border: 'none',
  padding: "15px 20px",
  backgroundColor: 'teal',
  color: 'whitesmoke',
  cursor: 'pointer'
})



const Register = () => {
const nav=useHistory()
  const [registerData,setRegisterData] = useState({username:"",email:"",password:""})
function handelChange(e){
  const {id,value}=e.target;
  setRegisterData({...registerData,[id]:value})
}

function handelSubit(){
  axios.post("https://hypee-1.herokuapp.com/api/auth/register",registerData).then(({data})=>{
    console.log(data)
    nav.push("/login")
  })
}
  return (
    <Container className='box'>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={(e)=>{
          e.preventDefault();
         handelSubit();
        }}>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input onChange={(e) => {
            handelChange(e)
          }} id="username" placeholder="Username" />
          <Input onChange={(e) => {
            handelChange(e)
          }} id="email" placeholder="Email" />
          <Input onChange={(e) => {
            handelChange(e)
          }} id="password" placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to
            the processing of my personel data in accordence with the
            <b>PRIVACY POLICY </b>
          </Agreement>
          <Button>CREATE AN ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register