import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleUser } from '../../redux/slices/usersSlice';

const UserProfile = () => {
    const {userId} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchSingleUser(userId));
    },[userId])

    const userProfile = useSelector(state=>state.users.singleUser)

    console.log(userProfile);

    return (
        <div>
            <h2>UserProfile</h2>
            { userProfile.joined }
            <hr />
        </div>
    );
};

export default UserProfile;