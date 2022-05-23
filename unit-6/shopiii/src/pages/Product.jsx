
import { Add, Remove } from '@mui/icons-material'
import "./Product.css"
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Salebox from '../component/Salebox'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import { addProduct } from '../redux/cartRedex'
import { useDispatch } from 'react-redux'



const Container=styled.div({

})

const Wrapper=styled.div({
padding:'60px',
display:'flex'
})

const ImgContainer=styled.div({
flex:'1'
})

const Image=styled.img({
width:'100%',
height:'70vh',
objectFit:'cover'
})

const InfoContainer=styled.div({
    flex:'1',
    padding:' 0px 60px'
})

const Title=styled.h1({
fontWeight:'200'
})

const Disc=styled.p({
margin:'35px 0px '
})

const Price=styled.p({
fontSize:'35px'
})

const Filterbox=styled.div({
margin:'30px 0px'
})

const Filter=styled.div({
    display:"flex",
    alignItems:"center"
})

const FilterTitle=styled.span({
    fontSize:'20px',
    fontWeight:'200'
})

const FilterSize=styled.select({
    marginLeft:'20px',
    padding:'5px'
})

const FilterSizeOption=styled.option({
    
})

const AddContainer=styled.div({
    display:'flex',
    alignItems:"center",
    width:'50%',
    justifyContent:"space-between"
})

const AmountContainer=styled.div({
    display:'flex',
    alignItems:'center',
    fontWeight:'700'
})


const Amount=styled.span({
    width:'30px',
    height:"30px",
    borderRadius:'10px',
    border:'1px solid teal',
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    margin:'0px 5px'

})

const Button =styled.button({
padding:'15px',
border:"2px solid teal",
backgroundColor:"white",
cursor:"pointer",
fontWeight:'500',

})




const Product = () => {
    const location =useLocation();
    const id= location.pathname.split("/")[2];

    const [product, setProduct]=useState({});
    const [quantity , setQuantity]=useState(1);
    const [size, setSize]=useState("")
    const dispatch= useDispatch()

    useEffect(()=>{
        const getProduct= async ()=>{
            try {
                const res=await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            } catch (error) {
                
            }
        }

        
        getProduct()
    },[id]);

//     function getProduct(){
// axios.get(`https://hypee-1.herokuapp.com/api/products/find/${id}`).then(({data})=>{ setProduct(data)})

//     }

    const handleQuantity=(type)=>{
        if(type==="dec"){
           quantity>1 && setQuantity(quantity-1);
        }

        else{
            setQuantity(quantity+1);
        }
    }

    const handleClick=()=>{
        //cart update function 
        dispatch(
            addProduct({...product, quantity, size})
        )

        
        
    }

  return (
    <Container>
        <Navbar/>
        <Salebox/>
        <Wrapper>
            <ImgContainer>
            <Image src={product.img}/>
            </ImgContainer>

            <InfoContainer>
                <Title>{product.title}</Title>
                <Disc>{product.desc}</Disc>
                <Price>RS {product.price}</Price>
                <Filterbox>
                    <Filter>                  
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=>(
                                <FilterSizeOption >{s}</FilterSizeOption>
                            ))}
                            
                            
                        </FilterSize>

                    </Filter>
                </Filterbox>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")} />
                        <Amount>{quantity}</Amount>
                        <Add  onClick={()=>handleQuantity("asc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>

        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product