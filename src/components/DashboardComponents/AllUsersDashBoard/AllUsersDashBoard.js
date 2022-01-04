import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '../../../redux/slices/usersSlice';
import './AllUserDashboard.css'

const AllUsersDashBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsersData());
    }, []);

    const allUsers = useSelector((state) => state?.users?.allUsers[0]);

    const handleDelete = id =>{
        const confirm = window.confirm("Are you sure to delete this user? ");
        if (confirm) {
            fetch(`http://localhost:5000/users/${id}`,{
              method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
              if (data.deletedCount) {
                alert("The User is deleted successfully!");
                window.location.reload();
              };
            })
        }
      }

    return (
        <div>
            < div className="container my-order-container custom-body" >
                <div className="text-center pb-3">
                    <h1 className="mb-5 text-center pt-5">All user <span className="text-danger"> {allUsers?.length}</span></h1>
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
                    {
                        allUsers?.map(user => < tbody >
                            <tr role="row" style={{ border: "2px solid gray" }} >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><img style={{ width: "70px", height: "50px" }} src={user.img} alt="" /></td>
                                <td>{user.category}</td>
                                <td>{user.area}</td>
                                <td> <button
                                    className="btn btn-danger"
                                    onClick={()=>handleDelete(user._id)}
                                >
                                    Delete user
                                </button></td>
                            </tr>

                        </tbody>)
                    }
                </table>
            </div >
        </div >





    );
};

export default AllUsersDashBoard;