import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchServiceData } from "../../../redux/slices/serviceSlice";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Service from "../Service/Service";

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServiceData());
  }, []);
  const services = useSelector((state) => state?.service?.allService[0]);
  return (
    <div>
      <Navigation />
      <h2 className="fw-bold text-center my-4">Services we provide</h2>
      {
        services?.length ? <div className="row container mx-auto ">
            {services?.map((service) => (
              <Service service={service} key={service._id}></Service>
            ))}
          </div>
        : <div className="d-flex justify-content-center mt-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
      }
      
      <Footer />
    </div>
  );
};

export default Services;
