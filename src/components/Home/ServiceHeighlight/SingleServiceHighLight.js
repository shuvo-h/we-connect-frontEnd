import React from 'react';

const SingleServiceHighLight = ({singleService}) => {
    console.log(singleService);
    return (
        <div>
            <h2>SingleServiceHighLight</h2>
            {singleService.service_catogory}
        </div>
    );
};

export default SingleServiceHighLight;