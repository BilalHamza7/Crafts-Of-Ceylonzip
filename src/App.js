import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import CreateCustomer from './pages/CreateCustomer';
import CreateSeller from './pages/CreateSeller';
import LoginCustomer from './pages/LoginCustomer';
import Seller from './pages/Seller';
import ForgotPassword from './pages/ForgotPassword';
import Product from './pages/ProductPage';
import LoginSeller from './pages/LoginSeller';


// import Login from './pages/AccountCreation';

import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/createcustomer" element={<CreateCustomer/>}/>
          <Route path="/createseller" element={<CreateSeller/>}/>
          <Route path="/logincustomer" element={<LoginCustomer/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/seller" element={<Seller/>}/>
          <Route path="/loginseller" element={<LoginSeller/>}/>

          {/* <Route path="/accountcreate" element={<CreateAccount/>}/> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;