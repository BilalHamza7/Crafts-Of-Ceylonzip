import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'

export function UserProfileSideBar({ onOptionClick }) {

  const handleOptionClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div className="sideBar">

        <div className='options'>

          <h3>DASHBOARD</h3>
          <div className='sidebarNavLinks'>
          <Link to="#" onClick={() => handleOptionClick('Orders')}>Orders</Link>
          <Link to="#" onClick={() => handleOptionClick('Account Details')}>Account Details</Link>
          </div>
        </div>

    </div>
  )
}

export function SellerProfileSideBar() {
    return (
      <div className="sideBar">
  
          <div className='options'>
  
            <h3>DASHBOARD</h3>
            <div className='sidebarNavLinks'>
              <Link>Product</Link>
              <Link>Order</Link>
              <Link>Sales</Link>
              <Link>Account Details</Link>
            </div>
          </div>
  
      </div>
    )
  }