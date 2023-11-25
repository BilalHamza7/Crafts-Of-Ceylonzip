import React from 'react'
import { Link } from 'react-router-dom'
import {NavigationBar1} from '../components/NavigationBar'
import Footer from '../components/Footer';
import Elephant from '../images/elephant.png';
import Drum from '../images/drum.png';
import Mask from '../images/mask.png';
import '../styles/home.css'
import ProductView from '../components/ProductView';


export default function Home() {
  return (
    <div>
        <NavigationBar1/>
        <div className='loginSignin'>

            <h1>Explore The Craftsmanship of Sri Lanka's</h1>
            <h1>Finest Artisans</h1>
            <p>Experience the Fusion of Tradition and Innovation, <br/>Unearth Exceptional Handcrafted Creations</p>

            <div className='btns'>
                <label id='btnLog'><Link to="/logincustomer">Log in</Link></label>
                <label id='btnSign'><Link to="/createcustomer">Sign Up</Link></label>
            </div>
            
        </div>
        <div className='announcement-container'>
            <div className='announcement'>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
                <span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span><span>Top Seller</span>
            </div>
        </div>
        <div className='productArticle'>

            <div className='articleOne'>
                <div className='columnOne'>
                    <img src={Elephant} alt="" id='imgEle' />
                </div>

                <div className='columnTwo'>
                    <h3>Elephant Woodcarvings</h3>
                    <p>Elephant wood carvings are a popular Sri Lankan handicraft, made from local hardwoods and used in religious and decorative settings. They depict elephants in various poses and are decorated with intricate patterns, often painted in vibrant colors. Traditional techniques have been passed down through generations and can take months or years to complete. Highly sought after by collectors and art lovers, Sri Lankan Elephant wood carvings are also commonly used as gifts and decorations in the country.</p>
                </div>
            </div>

            <div className='articleTwo'>
                 <div className='columnTwo'>
                    <h3>Elephant Woodcarvings</h3>
                    <p>Elephant wood carvings are a popular Sri Lankan handicraft, made from local hardwoods and used in religious and decorative settings. They depict elephants in various poses and are decorated with intricate patterns, often painted in vibrant colors. Traditional techniques have been passed down through generations and can take months or years to complete. Highly sought after by collectors and art lovers, Sri Lankan Elephant wood carvings are also commonly used as gifts and decorations in the country.</p>
                </div>
                <div className='columnOne'>
                    <img src={Drum} alt="" id='imgDrum'/>
                </div>
            </div>

            <div className='articleThree'>
                <div className='columnOne'>
                    <img src={Mask} alt="" id='imgMask'/>
                </div>

                <div className='columnTwo'>
                    <h3>Elephant Woodcarvings</h3>
                    <p>Elephant wood carvings are a popular Sri Lankan handicraft, made from local hardwoods and used in religious and decorative settings. They depict elephants in various poses and are decorated with intricate patterns, often painted in vibrant colors. Traditional techniques have been passed down through generations and can take months or years to complete. Highly sought after by collectors and art lovers, Sri Lankan Elephant wood carvings are also commonly used as gifts and decorations in the country.</p>
                </div>
            </div>
        </div>    
        <Footer/>    
        {/* <FirebaseImageUpload/>    */}

    </div>
  )
}