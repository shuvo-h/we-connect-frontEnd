import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServiceHeighlight } from "../../../redux/slices/serviceSlice";
import SingleServiceHighLight from "./SingleServiceHighLight";

const ServiceHeighlight = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServiceHeighlight());
  }, []);
  const heighlightServices = useSelector(
    (state) => state?.service?.serviceHeilight[0]
  );
    // if (!heighlightServices.length) {
    //   return <div class="spinner-border text-primary" role="status">
    //           <span class="visually-hidden">Loading...</span>
    //         </div>
    // }
  return (
    <>
      <h2 className="mt-5 fw-bold text-center">Our Featured</h2>
      {
        heighlightServices?.length ? <div className="row container mx-auto py-5">
            {heighlightServices?.map((singleService) => (
              <SingleServiceHighLight
                singleService={singleService}
                key={singleService._id}
              ></SingleServiceHighLight>
            ))}
          </div>
        : <div className="d-flex justify-content-center my-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
      }
      
    </>
  );
};

export default ServiceHeighlight;
