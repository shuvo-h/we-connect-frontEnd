import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchServiceData } from "../../../redux/slices/serviceSlice";
import AddSerevicesModal from "./AddSerevicesModal";
import './AllServicesDashBoard.css'

const AllServiceDashBoard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServiceData());
  }, []);

  const services = useSelector((state) => state?.service?.allService[0]);
  console.log(services);
  return (
    <div>
      <AddSerevicesModal />

      <div>
        < div className="container my-order-container custom-body" >
          <div className="text-center pb-3">
            <h1 className="mb-5 text-center pt-5">All Services <span className="text-danger"> {services?.length}</span></h1>
          </div>

          <table className="table table-dark" style={{ width: "100%" }}>
            <thead  >
              <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>

                <th >Image</th>
                <th >Category</th>
                <th >User ID</th>
                <th >Action</th>
              </tr>
            </thead>

            {services?.map((service) => (
              < tbody >
                <tr role="row" style={{ border: "2px solid gray" }} >
                  <td><img style={{ width: "70px", height: "50px" }} src={service.service_banner} alt="" /></td>
                  <td>{service.service_catogory}</td>
                  <td>{service.service_used}</td>
                  <td> <button
                    className="btn btn-danger"
                  >
                    Delete user
                  </button></td>
                </tr>

              </tbody>)
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllServiceDashBoard;
