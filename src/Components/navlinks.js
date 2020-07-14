import React from 'react';
import {Link} from 'react-router-dom'


function NavLink () {


    return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
    </div>
    )
}

export default NavLink;