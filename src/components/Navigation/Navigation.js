import React, { useContext } from 'react';

import './Navigation.scss';
import { Link } from 'react-router-dom';
import Auth from '../Login/useAuth';

const Navigation = () => {

    const auth = Auth();
    console.log(auth.user)
    const navLink =[
        {title:'Shop', path:"/shop"},
        {title:'Order Review', path:"/review"},
        {title:'Manage Inventory ', path:"/inventory"}
    ];
    return (
        <nav>
            {
                navLink.map((menu, key)=><Link key={key} to={menu.path}>{menu.title}</Link>)
            }
            {
                auth.user ? <span style={{color:'yellow'}}> Welcome, {auth.user.name}</span>:
                <Link to='/login'>Sign In</Link>
            }
        </nav>
    );
};

export default Navigation;