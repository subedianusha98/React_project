import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/images/newsletter.png" alt="newsletter" />
                <h3 className="mb-0 text-white">Sign Up for Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white">
                  Zero- Kilometer, pokhara <br />
                  PinCode:1311334
                </address>
                <a
                  href="tel:+977 3304444"
                  className="mt-3 d-block mb-2 text-white"
                >
                  +977 123484844
                </a>
                <a href="mailto:" className="mt-2 d-block mb-0 text-white">
                  anu2@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin />
                  </a>

                  <a className="text-white" href="#">
                    <BsInstagram />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="term-condition" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account </h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; powered by Anusha
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
