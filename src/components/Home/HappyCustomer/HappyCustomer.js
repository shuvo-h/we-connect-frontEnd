import React from "react";
import happyClient from "./../../../Assets/Happy-client.gif";
const HappyCustomer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex mt-5 justify-content-center">
          <h1>100+ Happy Clients</h1>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <img src={happyClient} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyCustomer;
