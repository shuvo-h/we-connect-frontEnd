import React from 'react';
import notFoundImage from './../../Assets/404.png'
const NotFound = () => {
    return (
        <div className="row">
            <div className="col-12">

                <img className='img-fluid' src={notFoundImage} alt="" />

            </div>
        </div>
    );
};

export default NotFound;