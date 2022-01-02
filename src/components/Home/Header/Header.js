import React from "react";

const Header = () => {
  return (
    <div className="header-bg vh-100 no-repet">
      <div className="d-flex justify-content-center align-items-center vh-100 ">
        <div className="text-center ">
          <h2 className="fw-bold">Your Personal Assistant</h2>
          <p className="fw-bold">
            One-stop solution for your services. Order any service anytime.
          </p>
          <form className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn text-light bg-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
