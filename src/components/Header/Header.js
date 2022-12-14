import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <Link to='/' ><img src={logo} alt="" /></Link>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {user?.uid ? <button className='btn-logout' onClick={logOut}>Log Out</button> :
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Sign up</NavLink>
                    </>}
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;