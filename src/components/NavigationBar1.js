import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navigationbar1.css';
import userImage from '../images/user11.png';
import search from '../images/search.png';
import shoppingCart from '../images/shopping-cart.png';

export default function NavigationBar1({ showAdditionalItems = true }) {
  return (
    <div className='navbar1'>
        <div className='navLeft'>
            <Link id='title' to="/">Craft of Ceylon.</Link>
            <input type="text" name="search" placeholder='Search..' autocomplete="off"/>
        </div>
        <div className='navRight'>
            {showAdditionalItems && (
              <ul>
                  <li>
                    <Link to="loginseller" style={{marginRight:"30px"}}><u>Be a Seller!</u></Link>
                  </li>
              </ul>
            )}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink id='btnContact' to="/contact">Contact</NavLink>
            <ul>
                <li id='btnShoppingCart'><img src={shoppingCart} alt="Chopping Cart" /></li>
                <li id='userProfile'><img src={userImage} alt="User Detail" /></li>
            </ul>

        </div>
    </div>
  )
}

