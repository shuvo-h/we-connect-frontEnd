import React from 'react';
import OurTeam1 from "./../../../Assets/ourTeam1.jpg";
import OurTeam2 from "./../../../Assets/ourTeam2.jpg";
import OurTeam3 from "./../../../Assets/ourTeam3.jpg";
import OurTeam4 from "./../../../Assets/ourTeam4.jpg";


import './ourTeam.css'
const OurTeam = () => {
    return (
        <div className='container py-5'>
            <div className="d-flex mt-5 justify-content-center">
                <h1 >Our Team</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurTeam1} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">BEATRICE PRIOR</h5>
                            <p className="card-text">Engin Expert</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurTeam2} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">EDWARD DUGHLAS</h5>
                            <p className="card-text">Design Expert</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurTeam3} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PETER PARKER</h5>
                            <p className="card-text">Technical Expert</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurTeam4} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LIZA THOMAS</h5>
                            <p className="card-text">Business Expert</p>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default OurTeam;