import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchServiceData } from '../../../redux/slices/serviceSlice';

const AllServiceDashBoard = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchServiceData())
    },[])

    const services = useSelector(state=>state?.service?.allService[0]);
console.log(services);
    return (
        <div>
            AllServiceDashBoard
            {
                services?.map(service=><li>{service.used} <img src={service.service_banner} alt="" /> </li>)
            }
        </div>
    );
};

export default AllServiceDashBoard;