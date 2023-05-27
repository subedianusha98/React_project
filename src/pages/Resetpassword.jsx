import React from 'react'
import Meta from '../Components/Meta';
import BreadCrumb from '../Components/BreadCrumb';

const Resetpassword = () => {
  return (
    <>
    <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <p className="text-center my-2 mb-3">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      type="confirm password"
                      name="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>

                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                      <button className="button border-0">OK</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Resetpassword;
