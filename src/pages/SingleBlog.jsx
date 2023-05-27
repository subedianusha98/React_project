import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                   <h3 className="title">A Beautiful Sunday Morning </h3> 
                   <img src="images/images/speaker-1.jpg" alt="blog" />
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
