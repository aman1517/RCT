import React from "react";
import "./Register.css"
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Salebox from "../component/Salebox";


const Checkout = () => {
 // const cart=useSelector(state=>state.cart)
 // var total =0;
    const render=()=>{
      // let a = item.price.split(",").join("");
      //   total=total+(+a)*item.quantity;    
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0"></h6>
            </div>
            <span className="text-muted"></span>
          </li>
          
        )
    }
  return (
    <>
    <Navbar/>
    <Salebox/>
    <div className="checkoutback">
      <div className="container  my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            {/* <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">order sumeery</span>
              <span className="badge bg-primary rounded-pill"></span>
            </h4> */}
            {/* <ul className="list-group mb-3">
           
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (INR)</span>
                <strong>Rs {total}</strong>
              </li>
            </ul> */}

            {/* <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form> */}
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate="">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address htmlFor shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required="">
                    <option value="">Choose...</option>
                    <option> India </option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required="">
                    <option value="">Choose...</option>
                    <option>Andra Pradesh</option>
                    <option>Maharashtra</option>
                    <option>UP</option>
                    <option>Bihar</option>
                    <option>Tamilnadu</option>
                    <option>Kerla</option>
                    <option>Goa</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr className="my-4" />
               <Link to={"/payment"}>
               <button className="w-100 btn btn-primary btn-lg" type="submit">
                Continue to Payment
              </button>
               </Link>
              
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Checkout;
