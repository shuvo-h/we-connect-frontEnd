import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <div className="d-flex justify-content-center mt-5">
                    <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
    }
    return user.email ? children : <Navigate to="/login" state={{from:location}} />;
};

export default PrivateRoute;