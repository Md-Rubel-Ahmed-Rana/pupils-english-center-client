import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    

    if(loading){
        return children
    }

    if(user && user.uid){
        return children
    }else{
        return <Navigate to="/login"></Navigate>
    }
    
};

export default PrivateRoute;