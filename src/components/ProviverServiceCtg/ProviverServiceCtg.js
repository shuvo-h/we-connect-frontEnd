import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchUsersCategory } from "../../redux/slices/usersSlice";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import CategoryServices from "./CategoryServices";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const ProviverServiceCtg = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersCategory(categoryName));
  }, [categoryName]);
  const categorizedUsers = useSelector(
    (state) => state?.users.categorizedUser[0]
  );

  return (

    <>
      <Navigation />{" "}
      <div className="container">
        <h3 className="text-center my-5 fw-bold">
          These people gives this category services{" "}
        </h3>
        {categorizedUsers?.length ? (
          <div className="row container">
            {categorizedUsers?.map((ctgUser) => (
              <CategoryServices
                key={ctgUser._id}
                ctgUser={ctgUser}
              ></CategoryServices>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center my-5">

            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

      }
      <Footer></Footer>
    </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProviverServiceCtg;

//
