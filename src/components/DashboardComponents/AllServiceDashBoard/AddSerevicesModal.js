import React from "react";
import { useForm } from "react-hook-form";

const AddSerevicesModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary my-5 mb-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add A service
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h5 className="modal-title " id="exampleModalLabel">
                  You're about to add a new service
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    required
                    placeholder="Service Image"
                    className="w-100 px-3 mb-2 border-1 py-2  rounded-pill"
                    {...register("service_banner")}
                  />{" "}
                  <br />
                  <input
                    required
                    placeholder="Service catogory"
                    className="w-100 px-3 mb-2 border-1 py-2  rounded-pill"
                    {...register("service_catogory")}
                  />
                  <br />
                  <input
                    defaultValue="0"
                    disabled
                    // placeholder="Service used"
                    className="w-100 px-3 mb-2 border-1 py-2  rounded-pill"
                    {...register("service_used")}
                  />{" "}
                  <br />
                  <textarea
                    required
                    rows="5"
                    placeholder="Service details"
                    className="w-100 px-3 mb-2 border-1 py-2  rounded-3"
                    {...register("service_details")}
                  />
                  <br />
                  <div className="d-flex mt-3 justify-content-end gap-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Add Service"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSerevicesModal;
