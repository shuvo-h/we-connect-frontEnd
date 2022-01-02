import React from "react";

const Footer = () => {
  return (
    <div className="pt-5 pb-3 footer">
      <div className="row mx-auto container text-lg-start text-center text-md-center text-xm-center">
        <div className="col-lg-4 col-sm-12 mx-auto">
          <img
            className="img-fluid w-25 mb-3"
            src="https://image.freepik.com/free-vector/technological-logo-design_1424-39.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-4 footer mt-lg-0  mt-sm-4 col-sm-12">
          <nav>
            <ul className="list-unstyled">
              <li>Read Our Blogs</li>
              <li>Know more</li>
              <li>Join Us today</li>
              <li>Follow om social media</li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-4 mt-lg-0  mt-sm-4  col-sm-12">
          <nav>
            <ul className="list-unstyled">
              <li>Get helps</li>
              <li>Read Faq</li>
              <li>View All cities</li>
              <li>Near Services</li>
            </ul>
          </nav>
        </div>
      </div>
      <p className="text-center pt-3">
        &copy;2021 All right reserved by We Connect.
      </p>
    </div>
  );
};

export default Footer;
