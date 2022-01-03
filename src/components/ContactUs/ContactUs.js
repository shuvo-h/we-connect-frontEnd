import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const ContactUs = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("message successfully sent!");
  };
  return (
    <div>
      <Navigation />
      <div id="contact" className="text-center py-3 form-background">
        <h2 className="py-3   text-center fw-bold">
          Contact us for your,
          <br /> service <span className="">personally</span>
        </h2>
        <form onSubmit={formSubmit} className="container pb-4">
          <div className="">
            <div className="mb-1">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="form-control input-form mx-auto"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-1">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="form-control input-form mx-auto"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-1">
              <input
                type="text"
                required
                placeholder="Your Address"
                className="form-control input-form mx-auto"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <textarea
                rows="6"
                type="text"
                required
                placeholder="Message"
                className="form-control input-form mx-auto"
              />
            </div>

            <button type="submit" className="btn btn-primary input-form">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
