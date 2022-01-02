import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceHeighlight } from '../../../redux/slices/serviceSlice';
import SingleServiceHighLight from './SingleServiceHighLight';

const ServiceHeighlight = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchServiceHeighlight())
    },[])
    const heighlightServices = useSelector(state=>state?.service?.serviceHeilight[0]);

console.log(heighlightServices);

    return (
        <div>
            {
                heighlightServices?.map(singleService=><SingleServiceHighLight singleService={singleService} key={singleService._id}></SingleServiceHighLight>)
            }
        </div>
    );
};

export default ServiceHeighlight;