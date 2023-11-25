import React from 'react'
import NavigationBar from '../components/NavigationBar1'
import Footer from '../components/Footer';
import '../styles/faq.css'

export default function Faq() {
  return (
    <div>
        <NavigationBar/>
        <div className='newFaqs'>
        </div>
        
        <Footer/>
    </div>
  )
}
