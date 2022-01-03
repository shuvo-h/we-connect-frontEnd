import React from 'react';

const MyServices = () => {
    return (
        <div>
            < div className="container my-order-container custom-body" >
                <div className="text-center pb-3">
                    <h1 className="mb-5 text-center pt-5">Your Ordered <span className="text-danger">5 </span>  Products....!!!!!</h1>
                </div>

                <table className="table table-dark" style={{ width: "100%" }}>
                    <thead  >
                        <tr className="bg-dark text-white mb-3 p-2" style={{ border: "1px solid red" }}>
                            <th  >Product</th>
                            {/* <th >Image</th> */}
                            <th >Price</th>
                            <th >Status</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    {/* {orders?.map((order) => ( */}
                    <tbody>
                        <tr role="row" style={{ border: "2px solid gray" }} >
                            <td>name</td>
                            {/* <td><img style={{ width: "70px", height: "50px" }} src={order.img} alt="" /></td> */}
                            <td>price</td>
                            <td>status</td>
                            <td> <button
                                className="btn btn-danger"
                            // onClick={() => handleOrderCancel(order._id)}
                            >
                                Cancel Order
                            </button></td>
                        </tr>
                    </tbody>

                    {/* ))} */}
                </table>
            </div >
        </div>
    );
};

export default MyServices;