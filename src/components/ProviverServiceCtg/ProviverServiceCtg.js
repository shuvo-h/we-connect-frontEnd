import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchUsersCategory } from "../../redux/slices/usersSlice";
import CategoryServices from "./CategoryServices";

const ProviverServiceCtg = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersCategory(categoryName));
  }, [categoryName]);
  const categorizedUsers = useSelector(
    (state) => state?.users.categorizedUser[0]
  );

  //   console.log(categorizedUsers);

  return (
    <div>
      <h3 className="text-center my-5 fw-bold">
        These people gives this category services
      </h3>
      <div className="row container">
        {categorizedUsers?.map((ctgUser) => (
          <CategoryServices
            key={ctgUser._id}
            ctgUser={ctgUser}
          ></CategoryServices>
        ))}
      </div>
    </div>
  );
};

export default ProviverServiceCtg;

//
