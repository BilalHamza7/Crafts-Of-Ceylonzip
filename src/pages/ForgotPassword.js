import { Label } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import { Header, WhiteLine1, Footer } from '../components/UserManagment';
import '../styles/forgotpassword.css'

export default function ForgotPassword() {

    const goBack = () => {
            window.history.go(-1); // This will navigate back one step in the history
    };
    return (
    <div>
        <Header/>
        <div className='forgotDiv'>
            <div className='forgotPasswordDiv'>

            <h3>Forgot your password?</h3><br/>
            <form method='post'>
                <label htmlFor='txtEmail' style={{marginBottom:"5px"}}>Email</label>
                <input type="email" id="txtEmail" name='email'autoComplete='off' style={{marginBottom:"15px"}}/>
                <div className='otpSend'>
                    <button id='btnSend'>Send OTP</button>
                </div>


                    <label>Enter OTP</label>
                    <div className='otp4'>
                        <input type="text" maxLength='1'/>
                        <input type="text" maxLength='1'/>
                        <input type="text" maxLength='1'/>
                        <input type="text" maxLength='1'/>
                    </div>
                    <div>
                        <label>New Password</label>
                        <input type='password' />

                        <label>Confirm New Password</label>
                        <input type='password' />

                        <input type='submit' value='Reset Password' id='btnResetPassword'/>

                    </div>
                    <label onClick={goBack} style={{color:"black", fontSize:"18px", cursor:"pointer"}}>Go back</label>
                </form>
            </div>
        </div>
        <WhiteLine1/>
        <Footer/>

    </div>
  )
}
