import React from 'react';
import './Loin.scss';
import Auth from './useAuth';




const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = '/review';
            })
    }
    const handleSingOut = () => {
        auth.signOut()
            .then(res => {
                window.location.pathname = '/';
            })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Join The Party!!</h1>
            {
                auth.user ? <button onClick={handleSingOut}>Sign Out</button> :
                    <button onClick={handleSignIn}>Sign In With Google</button>
            }
        </div>
    );
};

export default Login;