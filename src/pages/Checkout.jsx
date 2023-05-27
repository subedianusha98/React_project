import React,{useState} from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useMemo } from "react";
const Checkout = () => {
  // const CountrySelector =()=> {
  //   const[value,setValue]=useState('');
  //   const options=useMemo(()=>countryList.getData(),[])
  //   const changeHandler =value=>{
  //     setValue(value);
  //   }
  
  // }
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Develops</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">Cart</Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active">Shipping</li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact information</h4>
                <p className="user-details">Anusha Subedi(anu@gmail.com)</p>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    {/* <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Selected Country
                      </option>
                    </select> */}
                    {/* <Select options={options} value={value} onChange={changeHandler} /> */}

                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Current location"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                      
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
                <div></div>
                <div></div>
                <div className="d-flex justify-content-between align-items-center">
                    
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
