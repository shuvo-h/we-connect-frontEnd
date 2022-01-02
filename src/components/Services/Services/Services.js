import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchServiceData } from '../../../redux/slices/serviceSlice';
import Service from '../Service/Service';

const Services = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchServiceData())
    },[])
    const services = useSelector(state=>state?.service?.allService[0]);
    return (
        <div>
            <h1>Services page</h1>
            {
                services?.map(service =><Service service={service} key={service._id}></Service>)
            }
        </div>
    );
};

export default Services;