import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { Vortex } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
            <div className='text-center'>
                <Vortex
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
        )
    }

    if(user && user?.uid){
        return children;
    }
    return <Navigate to={"/login" || "/register"} state={{ from: location }} replace />
    
};

export default PrivateRoute;