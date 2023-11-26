import React from 'react'
import '../style/customerandsellersidebar.css'
import { Link } from 'react-router-dom'


export function UserSideBar() {

  return (
    <div className="sideBar">

        <div className='options'>

          <h3>DASHBOARD</h3>
          <div className='sidebarNavLinks'>
            <Link>Orders</Link>
            <Link>Account Details</Link>
          </div>
        </div>
    </div>
  )
}

export function SellerSideBar() {
    return (
      <div className="sideBar">
  
          <div className='options'>
  
            <h3>DASHBOARD</h3>
            <div className='sidebarNavLinks'>
              <Link onClick={() => handleOptionClick('Product')}>Product</Link>
              <Link onClick={() => handleOptionClick('Order')}>Order</Link>
              <Link onClick={() => handleOptionClick('Sales')}>Sales</Link>
              <Link onClick={() => handleOptionClick('Account Details')}>Account Details</Link>
            </div>
          </div>
  
      </div>
    )
  }