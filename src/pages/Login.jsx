import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(`Email:${email},Password:${password}`);
  };
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}

                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                        <button className="button border-0">Login</button>
                        <Link  to ="/signup"className="button signup">SignUp</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
