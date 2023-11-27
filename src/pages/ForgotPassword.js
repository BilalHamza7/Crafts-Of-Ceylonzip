import { Label } from '@mui/icons-material';
import React, {useRef, useState} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Header, WhiteLine1, Footer } from '../components/UserManagment';
import '../styles/forgotpassword.css'
import emailjs from '@emailjs/browser'


export default function ForgotPassword() {

    const navigate = useNavigate();

    const goBack = () => {
            window.history.go(-1); // This will navigate back one step in the history
    };

    const [enteredOtp, setEnteredOtp] = useState('');
    const otp = 4231;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            otp: otp
        };
    
        emailjs.send('service_xrmkpqr', 'template_vvyn3kb', templateParams, '0wIuJp-cMzszQ-_HK')
            .then((result) => {
                alert("email sent")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleEmail = (e) => {
        e.preventDefault()

        if(enteredOtp === otp)
        {
            navigate("/user/product");
        }
        else{
            alert("The otp entered is incorrect.")
        }
    }

    return (
    <div>
        <Header/>
        <div className='forgotDiv'>
            <div className='forgotPasswordDiv'>

            <h3>Forgot your password?</h3><br/>
            <form ref={form} onSubmit={handleEmail}>
                <label htmlFor='txtEmail' style={{marginBottom:"5px"}}>Email</label>
                <input type="email" id="email" name='email' autoComplete='off' style={{marginBottom:"15px"}}/>

                <div className='otpSend'>
                    <button id='btnSend' onClick={sendEmail}>Send OTP</button>
                </div>
                
                   <label>Enter OTP</label>
                    <input type="number" id="txtOtp" name="otp" autoComplete='off' onChange={(e) => setEnteredOtp(e.target.value)} style={{marginBottom:"15px"}}/>

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
