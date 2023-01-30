import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <button className="btn btn-ghost text-red-700 loading"></button>
    }

    if(user && user.uid){           
        return children;
    }
    else{
        return (       
            <Navigate to="/login" state={{from: location}} replace></Navigate>
        );
    }
};

export default PrivateRoute;