import React from 'react'
import '../styles/customersidebar.css'

export default function DashboardMenue() {
  return (
    <div className='sideBar'>

        <div className='category'>
          <h3>CATEGORIES</h3>
          <ul>
            <li>Woodwork</li>
            <li>Metalwork</li>
            <li>Textiles</li>
            <li>Pottery and Ceramics</li>
            <li>Basketry</li>
            <li>Bamboo and Reed Craft</li>
            <li>Traditional Batiks</li>
            <li>Traditional Masks</li>
          </ul>

        </div>
        <div className='filterbyPrice'>

          <h3>Filter By Price</h3>

        </div>

    </div>
  )
}
