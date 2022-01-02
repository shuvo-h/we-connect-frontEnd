import React from 'react';

const Service = ({service}) => {
    console.log(service); // design your service card with this data
    return (
        <div>
            <h2>Single Service</h2>
            <ul>
                <li>{service.service_catogory}</li>
                <li>{service.service_used} times</li>
                <hr />
            </ul>
        </div>
    );
};

export default Service;