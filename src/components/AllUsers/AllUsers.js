import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersData } from '../../redux/slices/usersSlice';

const AllUsers = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsersData())
    },[])
    const users = useSelector(state=>state);
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default AllUsers;