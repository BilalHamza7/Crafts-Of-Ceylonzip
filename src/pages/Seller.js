import React, { useState } from 'react';
import '../styles/productView.css'
import NavigationBar from '../components/NavigationBar1';
import Footer from '../components/Footer';
import SellerSideBar from '../components/SellerSideBar';
import SellerView from '../components/SellerView';
import '../styles/seller.css'

export default function Seller() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
        <NavigationBar showAdditionalItems={false}/>
        <div className='aboutBackgroundPage'>

        <h1>Welcome Seller</h1>
        <p>Your Dashboard will provide an overview of your business at Crafts of Ceylon. </p>
        </div>

        <div className='SellerSelectAndView'>
          <div className='sidebar'>
            <SellerSideBar onOptionClick={handleOptionClick} />
          </div>
          <div className='dashboard'>
            <SellerView selectedOption={selectedOption} />
          </div>
        </div>
        <Footer/>
    </div>
  )
}