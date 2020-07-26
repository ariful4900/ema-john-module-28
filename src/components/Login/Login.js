import React from 'react';
import './Loin.scss';
import Auth from './useAuth';




const Login = () => {
    const auth = Auth();

    return (
        <div style={{textAlign:'center'}}>
            <h1>Join The Party!!</h1>
           {
               auth.user?  <button onClick={auth.signOut}>Sign Out</button>:
               <button onClick={auth.signInWithGoogle}>Sign In With Google</button>
           }
        </div>
    );
};

export default Login;