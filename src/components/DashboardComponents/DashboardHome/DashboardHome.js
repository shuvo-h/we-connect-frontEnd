import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div className="text-center ">
      <h1 className="py-4">Welcome To Dashboard</h1>
      <div className="d-flex justify-content-center ">
        <div className="text-center bg-danger p-3 rounded-3">
          <p className="my-1">{user.displayName}</p>

          <p className="my-1 container">{user.email}</p>
        </div>
      </div>
      <div className="">
        {" "}
        <img
          className="home-style "
          src="https://i.ibb.co/T09r0Zd/site-stats-concept-illustration-114360-1509-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default DashboardHome;
