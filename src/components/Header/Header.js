import React from 'react';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/' ><img src={logo} alt="" /></Link>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="login">Login</NavLink>
                <NavLink to="signup">Sign up</NavLink>
            </div>
        </nav>
    );
};

export default Header;