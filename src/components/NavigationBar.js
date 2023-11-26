import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navigationbar1.css';
import userImage from '../images/user11.png';
import search from '../images/search.png';
import shoppingCart from '../images/shopping-cart.png';

export function NavigationBar1() {
  return (
    <nav className="navbar">
        <div className="navLeft">
            <Link id='title' to="/">Craft of Ceylon.</Link>
            <input type="text" name="search" placeholder='Search..' autoComplete="off"/>
        </div>
        

        <div className="navRight">
            <NavLink id='title' to="/loginseller">Be a Seller!</NavLink>        {/* Link is suitable for general navigation where you don't need to apply specific styles to the active link. */}
            <NavLink to="/" className="Link">Home</NavLink>
            <NavLink to="/about" className="Link">About</NavLink>
            <NavLink to="/contact" className="Link">Contact</NavLink>
            <NavLink to="/logincustomer"><img src={userImage}/></NavLink>
        </div>

    </nav>
  )
}


export function NavigationBar2() {
  return (
    <nav className="navbar">
        <div className="navLeft">
            <Link id='title' to="/">Craft of Ceylon.</Link>
            <input type="text" name="search" placeholder='Search..' autoComplete="off"/>
        </div>
        

        <div className="navRight">
            <NavLink id='title' to="/sellerLogin">Be a Seller!</NavLink>        {/* Link is suitable for general navigation where you don't need to apply specific styles to the active link. */}
            <NavLink to="/" className="Link">Home</NavLink>
            <NavLink to="/user/product" className="Link">Products</NavLink>               {/* NavLink allows you to apply custom styles to the active link, making it easy to highlight the current page or section. */}
            <NavLink to="/about" className="Link">About</NavLink>
            <NavLink to="/contact" className="Link">Contact</NavLink>
            <NavLink to="/user/cart"><img src={shoppingCart}/></NavLink>
            <Link to="/user/detail"><img src={userImage}/></Link>
        </div>

    </nav>
  )
}

export function NavigationBar3() {
  return (
    <nav className="navbar">
      <div className="navLeft">
            <Link id='title' to="/">Craft of Ceylon.</Link>
        </div>
    </nav>
  )
}
