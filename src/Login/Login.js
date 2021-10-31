import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Login = () => {

    const {signInWithGoogle, setUser, setIsLoading} = useAuth();

    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || "/home"
    
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
            }
            
            )
        .catch((err) => console.log(err))
        .finally(() => {
            setIsLoading(false)
          })
    }

    return (
        <div className="container text-center p-5">
            <h2 className="text-primary">Please Login</h2>
            <button className="btn btn-warning" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;