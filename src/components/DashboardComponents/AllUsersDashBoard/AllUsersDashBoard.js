import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '../../../redux/slices/usersSlice';

const AllUsersDashBoard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUsersData());
    }, []);

    const allUsers = useSelector((state) => state?.users?.allUsers[0]);
  
    console.log(allUsers);
    
    return (
        <div>
            AllUsersDashBoard
        {
            allUsers?.map(user=><li>{user.email} joined at {user.joined}</li>)
        }
        </div>
    );
};

export default AllUsersDashBoard;