import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItem } = useContext(ShopContext);
    const menuRef = useRef();


    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to="/"><img src={logo} alt="" /></Link>
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png" alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("shop")}><Link to='/' style={{ textDecoration: "none", fontSize: "18px" }}>Shop</Link>  {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("men")}><Link to='/men' style={{ textDecoration: "none", fontSize: "18px" }}>Men</Link> {menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("women")}><Link to='/women' style={{ textDecoration: "none", fontSize: "18px" }}>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: "none", fontSize: "18px" }} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button> :
                    <Link to='/login'><button>Login</button></Link>}

                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    )
};

export default Navbar
