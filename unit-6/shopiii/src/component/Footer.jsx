import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";
  import styled from "styled-components";
 
  
  const Container = styled.div({
    display: "flex"
  })
    
    
  
  const Left = styled.div({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px'
  
  })
    
  
  const Logo = styled.h1({})
  
  const Desc = styled.p({
    margin: "20px 0px"
  })
    
  
  
  const SocialContainer = styled.div({
    display: "flex"
  })
    
  
  
  const SocialIcon = styled.div({

    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: 'white',
    //background-color: #${(props) => props.color};
    display: 'flex',
    alignIteams: 'center',
    justifyContent: 'center',
    marginRight: '20px'
  
  })
    
  
  const Center = styled.div({
    flex: '1',
    padding: '20px'
  })
    
    
  
  
  const Title = styled.h3({

    marginBottom: '30px'
  })
   
  
  
  const List = styled.ul({

    margin: '0',
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
  })
    
  
  
  const ListItem = styled.li({
    width: '50%',
    marginBottom: '10px'
  })
   
  
  
  const Right = styled.div({
    flex: '1',
    padding: '20px'
  })
    
    
  
  
  const ContactItem = styled.div({
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  
  })
    
  
  const Payment = styled.img({
    width: '50%'
  })
      

  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>HyPee</Logo>
          <Desc>
          Hypee, Inc. is an Indian multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> B503, Altissimo, Wakad-411057
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 8421163964
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> roshanindane7@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;