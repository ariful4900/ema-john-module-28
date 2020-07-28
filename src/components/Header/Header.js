import React from 'react';


import logo from '../../assets/images/logo.png';
import './Header.scss';
import Navigation from '../Navigation/Navigation';




const Header = () => {
    
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