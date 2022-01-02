import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div style={{backgroundColor:"black", width:"200px", height:"100vh", color:"white", position:"fixed"}}>sidenav</div>
            <div style={{marginLeft:"100vw-500px"}}>
                <h1>outlet outtttttttttttttttttlet ouuuuuuuuuuuut</h1>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;