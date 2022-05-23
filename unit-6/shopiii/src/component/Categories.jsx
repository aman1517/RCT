import  styled  from 'styled-components'
import React from 'react'
import { categories } from '../data'
import CategoryIteam from './CategoryIteam'



const Container=styled.div({
display:"flex",
padding:"20px",
justifyContent:"space-between"
})


const Categories = () => {
  return (
    <Container>
        {
            categories.map(iteam=>(
                <CategoryIteam iteam={iteam} key={iteam.id}/>
            ))
        }

    </Container>
  )
}

export default Categories