import React, { useContext, useState } from 'react';
import '../CSS/EcommerceMaster.css';
import logo from '../assets/logo1.png';
import "@fortawesome/fontawesome-svg-core";
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItem } = useContext(ShopContext)

    return (
    <>
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>My Outfit</p>
        </div>
        <ul className='nav-menu'>
            <Link to="shop"><li onClick={() => {setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li></Link>
            <Link to="men"><li onClick={() => {setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li></Link>
            <Link to="woman"><li onClick={() => {setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li></Link>
            <Link to="kids"><li onClick={() => {setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li></Link>
        </ul>
        <div className="nav-login-cart">
            <Link to="signUp"><button>Login</button></Link>
            <Link to="cart"><i className="fa-solid fa-cart-arrow-down"></i></Link>
            <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>
    </>
    )
}
