import React from 'react'
import '../style/usersidebar.css'
import { Link } from 'react-router-dom'


export function UserSideBar() {

  // const styleFromOther = {
  //   height: compHeight,
  // };

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
              <Link>Product</Link>
              <Link>Order</Link>
              <Link>Sales</Link>
              <Link>Account Details</Link>
            </div>
          </div>
  
      </div>
    )
  }