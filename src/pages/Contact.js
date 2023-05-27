import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import {
  AiOutlineHome,
  AiFillPhone,
  AiFillMessage,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Contact = () => {
  
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1603.9514291341345!2d83.97437483880248!3d28.213082907427214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595cdb84d7e3b%3A0xda60f09f785e25dc!2sZero%20Km%20pokhara!5e0!3m2!1sen!2snp!4v1683110690012!5m2!1sen!2snp"
                width="600"
                height="450"
                className="border-0 w-100"
                allowfullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact </h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="Email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        className="w-100 form-control"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno:58.1, Near Gharelu ,0-km pokhara{" "}
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillPhone className="fs-5" />
                        <a href="tel:+977 9825194141">+977 9825194141</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillMessage className="fs-5" />
                        <a href="mailto:anu@gmail.com">anu@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineInfoCircle className="fs-5" />
                        <p className="mb-0">Monday -Friday 10AM -PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
