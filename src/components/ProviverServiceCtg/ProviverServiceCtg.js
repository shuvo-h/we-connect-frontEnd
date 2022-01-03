import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchUsersCategory } from '../../redux/slices/usersSlice';

const ProviverServiceCtg = () => {
    const {categoryName} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsersCategory(categoryName))
    },[categoryName])
    const categorizedUsers = useSelector((state) => state?.users.categorizedUser[0]);

    console.log(categorizedUsers);

    return (
        <div>
            ProviverServiceCtg
            {
                categorizedUsers?.map(ctgUser=><li><img src={ctgUser.img} alt="" /></li>)
            }
        </div>
    );
};

export default ProviverServiceCtg;