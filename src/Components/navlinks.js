import React from 'react';
import { Link } from 'react-router-dom'



function NavLink() {


    return (
        <div>
            <ul className="NavUl">
                <li className="Navli"><Link style={{textDecoration: 'none', color:"white"}} to="/">Home</Link></li>
                <li className="Navli"><Link style={{textDecoration: 'none', color:"white"}} to="/aboutus">About Us</Link></li>
                <li className="Navli"><Link style={{textDecoration: 'none', color:"white"}} to="/menu">Menu</Link></li>
                <li className="Navli"><Link style={{textDecoration: 'none', color:"white"}} to="/cart">Checkout</Link></li>

            </ul>


        </div>
    )
}

export default NavLink;