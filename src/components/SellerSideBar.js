import React from 'react'
import '../styles/sellersidebar.css'

export default function SellerSideBar({ onOptionClick }) {

  const handleOptionClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div className='sellerSideBar'>
       <div className='options'>
          <h3>DASHBOARD</h3>
          <ul>
          <li onClick={() => handleOptionClick('Product')}>Product</li>
          <li onClick={() => handleOptionClick('Order')}>Order</li>
          <li onClick={() => handleOptionClick('Sales')}>Sales</li>
          <li onClick={() => handleOptionClick('Account Details')}>Account Details</li>
          </ul>

        </div>
        
    </div>
  )
}
