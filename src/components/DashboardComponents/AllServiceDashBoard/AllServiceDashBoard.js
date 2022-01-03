import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchServiceData } from "../../../redux/slices/serviceSlice";
import AddSerevicesModal from "./AddSerevicesModal";

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
            <h1 className="mb-5 text-center pt-5">All user <span className="text-danger"> 5</span></h1>
          </div>

          <table className="table table-dark" style={{ width: "100%" }}>
            <thead  >
              <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>
                <th >Name</th>
                <th >Email</th>
                <th >Image</th>
                <th >Category</th>
                <th >Status</th>
                <th >Action</th>
              </tr>
            </thead>

            {services?.map((service) => (
              < tbody >
                <tr role="row" style={{ border: "2px solid gray" }} >
                  <td>name</td>
                  <td>user</td>
                  <td><img style={{ width: "70px", height: "50px" }} src='https://www.clearchoiceuk.com/storage/2018/08/qualities-and-skills-of-a-commercial-cleaner.jpg' alt="" /></td>
                  <td>category</td>
                  <td>area</td>
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
