import styled from 'styled-components'
import React from 'react'



const Container=styled.div({
    height:"25px",
    backgroundColor:"Gray",
    color:"white",
    display:"flex",
    fontSize:"14px",
    fontWeight:"500",
    justifyContent:"center",
    alignItems:"center"
})

const Salebox = () => {
  return (
    <Container>
      Super Deal! Buy 1 and Get 4 T-Shirts! Hurry!!!
    </Container>
  )
}

export default Salebox
