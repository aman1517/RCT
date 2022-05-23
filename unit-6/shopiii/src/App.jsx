import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import { useSelector } from 'react-redux';
import Checkout from "./pages/Checkout"
import { Payment } from './pages/Payment';



function App() {

  const user=useSelector((state)=>state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>

        <Route path="/product/:id">
          <Product/>
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/" />: <Login/>}
          {/* <Login/> */}
        </Route>

        <Route path="/register">
        {user ? <Redirect to="/" />: <Register/>}
          <Register/>
        </Route>

        <Route path="/checkout">
          <Checkout/>
        </Route>

        <Route path="/payment">
          <Payment/>
        </Route>
      


      </Switch>
    </Router>
  
  );
}

export default App;
