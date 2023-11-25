import React from 'react'
import NavigationBar from '../components/NavigationBar1'
import Footer from '../components/Footer';
import '../styles/contact.css'

export default function Contact() {
  return (
    <div>
        <NavigationBar showAdditionalItems={false}/>
        <div className='callUs'>
            <h1>Call Us</h1>
        </div>
        <div className='fillingForm'>
            
        </div>

        <Footer/>
    </div>
  )
}
