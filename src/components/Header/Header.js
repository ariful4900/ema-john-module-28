import React from 'react';


import logo from '../../assets/images/logo.png';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import {useAuth} from '../../components/Login/useAuth';




const Header = () => {
const auth = useAuth();
console.log(auth)
    
    return (
        <div className="header">
            <div >
                <img src={logo} alt="" />
               
            </div>
            <Navigation></Navigation>
        </div>
    );
};

export default Header;