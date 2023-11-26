import React from 'react'
import { useState } from 'react'
import '../styles/accountDetails.css'

export default function AccountDetails() {
    {/* set usestate from the database */}
    const [name,setName] = useState('');
    const [email,setemail] = useState('');
    const [mobileNumber,setmobileNumber] = useState('');
    const [usersName,setusersName] = useState('');
    const [defaultAddress,setdefaultAddress] = useState('');
    const [secondaryAddress,setsecondaryAddress] = useState('');
    const [businessName,setbusinessName] = useState('');

    const [userName,setUsername] = useState('');
    const [password,setpassword] = useState('');

    const handleAccountDetailsUpdate = () =>{

    }
    const handleResetPassword = () =>{

    }

  return (
    <div className='accountDatails'>

        <div className='navLefts'>
            <label className='titleDetails'>YOUR PROFILE DETAILS</label>
            <form onSubmit={handleAccountDetailsUpdate}>

                <label htmlFor="txtFullName">Your name*</label>
                <input type="text" value={name} id="txtFullName" name='name' autoComplete='off'/>

                <label htmlFor="txtEmail">Email*</label>
                <input type="email" value={email} id="txtEmail" name='email'autoComplete='off'/>
                
                <label htmlFor="txtmobilenumber">Mobile Number*</label>
                <input type="number" value={mobileNumber} id="txtmobilenumber" name='txtmobilenumber'autoComplete='off'/>

                <label htmlFor="txtusername">Username*</label>
                <input type="text" value={usersName} id="txtusername" name='txtusername'autoComplete='off'/>

                <label htmlFor="txtdefaultaddress">Default Address*</label>
                <input type="text" value={defaultAddress} id="txtdefaultaddress" name='txtdefaultaddress'autoComplete='off'/>

                <label htmlFor="txtsecondaryaddress">Secondary Address*</label>
                <input type="text" value={secondaryAddress} id="txtsecondaryaddress" name='txtsecondaryaddress'autoComplete='off'/>

                <label htmlFor="txtbusinessname">Business Name*</label>
                <input type="text" value={businessName} id="txtbusinessname" name='txtbusinessname'autoComplete='off'/>

                <input type='submit' value="Continue" id='btnUpdateProfile'/>

            </form>
        </div>

        <div className='navRight'>
            <label className='titleResetPassword'>RESET PASSWORD</label>
            <form onSubmit={handleResetPassword}>
                <label htmlFor="txtusername">Current Password*</label>
                <input type="text" value={userName} id="txtusername" name='txtusername'autoComplete='off'/>

                <label htmlFor="txtpassword">New Password*</label>
                <input type="password" value={password} id="txtpassword" name='txtpassword'autoComplete='off'/>

                <label htmlFor="txtconfirmpassword">Confirm New Password*</label>
                <input type="password" id="txtconfirmpassword" name='txtconfirmpassword'autoComplete='off'/>

                <input type='submit' value="Continue" id='btnResetPassword'/>

            </form>
        </div>
    </div>
  )
}
