import React from 'react'
import { useState } from 'react'
import '../styles/accountDetails.css'
import { useEffect } from 'react';
import { loginCusId } from '../pages/LoginCustomer';
import axios from 'axios';

export default function AccountDetails() {
    const [name,setName] = useState('');
    const [email,setemail] = useState('');
    const [mobileNumber,setmobileNumber] = useState('');
    const [username,setUsername] = useState('');
    const [address,setAddress] = useState('');

    const [password,setPassword] = useState('');
    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDetails = async () => {
            alert(loginCusId)
            try {
                const response1 = await axios.get(`http://localhost:8081/customer/getCustomer/${loginCusId}`);
                setName(response1.data.name);
                setemail(response1.data.email);
                setmobileNumber(response1.data.mobileNumber);
                setAddress(response1.data.address);
            
                const response2 = await axios.get(`http://localhost:8081/customer/getCustomerLogin/${loginCusId}`);
                setUsername(response2.data.username);
                setOldPassword(response2.data.password);
                
                setLoading(false); // Data fetched, loading state set to false
              } catch (error) {
                setLoading(false); // In case of an error, set loading state to false
                console.error("Error fetching data: ", error);
              }
        }
        
        getDetails();
    },[]);

    const handleAccountDetailsUpdate = () =>{
        axios.put('http://localhost:8081/customer/updateCustomer',loginCusId,{
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            address: address
        })        
        .then(response => {
            // Handle success
        })
        .catch(error => {
        });

    }

    const handleResetPassword = () =>{
        if(oldPassword === password){
            axios.put('http://localhost:8081/customer/updateCustomerlogin',loginCusId,{
            username: username,
            password: newPassword //setting the new password
        })
        .then(response => {
        })
        .catch(error => {
        });
        }
        else{
            alert("The password you is incorrect.")
        }
        
    }

  return (
    <div className='accountDatails'>

        <div className='navLefts'>
            <label className='titleDetails'>YOUR PROFILE DETAILS</label>
            <form onSubmit={handleAccountDetailsUpdate}>

                <label htmlFor="txtFullName">Your name*</label>
                <input type="text" value={name} id="txtFullName" name='name' autoComplete='off' onChange={(e) => setName(e.target.value)} required/>

                <label htmlFor="txtEmail">Email*</label>
                <input type="email" value={email} id="txtEmail" name='email'autoComplete='off' onChange={(e) => setemail(e.target.value)} required/>
                
                <label htmlFor="txtmobilenumber">Mobile Number*</label>
                <input type="number" value={mobileNumber} id="txtmobilenumber" name='txtmobilenumber'autoComplete='off' onChange={(e) => setmobileNumber(e.target.value)} required/>

                <label htmlFor="txtusername">Username*</label>
                <input type="text" value={username} id="txtusername" name='txtusername'autoComplete='off' onChange={(e) => setUsername(e.target.value)} required/>

                <label htmlFor="txtsecondaryaddress">Address*</label>
                <input type="text" value={address} id="txtsecondaryaddress" name='txtsecondaryaddress'autoComplete='off' onChange={(e) => setAddress(e.target.value)} required/>

                <input type='submit' value="Continue" id='btnUpdateProfile'/>

            </form>
        </div>

        <div className='navRight'>
            <label className='titleResetPassword'>RESET PASSWORD</label>
            <form onSubmit={handleResetPassword}>
                <label htmlFor="txtusername">Current Password*</label>
                <input type="text" value={password} id="txtusername" name='txtusername'autoComplete='off' onChange={(e) => setPassword(e.target.value)} required/>

                <label htmlFor="txtpassword">New Password*</label>
                <input type="password" value={newPassword} id="txtpassword" name='txtpassword'autoComplete='off' onChange={(e) => setNewPassword(e.target.value)} required/>

                <label htmlFor="txtconfirmpassword">Confirm New Password*</label>
                <input type="password" id="txtconfirmpassword" name='txtconfirmpassword'autoComplete='off'/>

                <input type='submit' value="Continue" id='btnResetPassword'/>

            </form>
        </div>
    </div>
  )
}
