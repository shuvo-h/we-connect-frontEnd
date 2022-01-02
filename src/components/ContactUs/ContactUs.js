import React from "react";
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
        {/* <form onSubmit={formSubmit} className="  ">
          <div className="">
            <input
              required
              className="w-25 input-style my-1 px-2 py-2 rounded-3 border-1 border-danger"
              type="text"
              name="firstName"
              placeholder="FirstName"
            />
            <br />
            <input
              required
              className="w-25 my-1 px-2 py-2 rounded-3 border-1 border-danger"
              type="text"
              name="lastName"
              placeholder="LastName"
            />
            <br />
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-25 my-1 px-2 py-2 rounded-3 border-1 border-danger"
            />{" "}
            <br />
            <input
              required
              type="text"
              name="Number"
              placeholder="Phone"
              className="w-25 my-1 px-2 py-2 rounded-3 border-1 border-danger"
            />{" "}
            <br />
            <textarea
              name="message"
              className="w-25 my-1 px-2 py-2 rounded-3 border-1 border-danger"
              required
              placeholder="Message"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Send Message"
              className="w-25 my-2 px-2 py-2 rounded-3 border-1 border-danger"
            />
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default ContactUs;
