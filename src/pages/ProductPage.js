import React from 'react'
import {NavigationBar2} from '../components/NavigationBar'
import Footer from '../components/Footer';
import SideBar from '../components/ProductCustomerSideBar';
import ProductView from '../components/ProductView';
import '../styles/product.css'
import { useState } from 'react';

export default function Product() {
  const [selectedOption, setSelectedOption] = useState("Woodwork");

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    window.alert(selectedOption);
  };

  return (
    <div className='ProductDisplayContainer'>
        <NavigationBar2/>
        <div className='welcomeImage'>
            <h1>Products</h1>
            <p>“Discover Exquisite Sri Lankan Handicrafts,<br/> Where Each Piece Tells a Story & Each Craftsmanship a Heritage.”</p>
        </div>

        <div className='productSelectAndView'>

          <div className='leftFrame'>
            <SideBar  onOptionClick={handleOptionClick}/>
          </div>
          <div className='rightFrame'>
            <ProductView />
          </div>

        </div>
        <Footer/>
        
    </div>
  )
}
