import React from 'react'
import {NavigationBar1} from '../components/NavigationBar'
import Footer from '../components/Footer';
import '../styles/contact.css'

export default function Contact() {
  return (
    <div>
        <NavigationBar1/>
        <div className='callUs'>
            <h1>Call Us</h1>
        </div>
        <div className='fillingForm'>
            
        </div>

        <Footer/>
    </div>
  )
}
