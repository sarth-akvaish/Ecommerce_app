import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='logsign'>
            <div className="logsign-container">
                <h1>Sign Up</h1>
                <div className="logsign-fields">
                    <input type="text" placeholder='Your name' name="" id="" />
                    <input type="email" placeholder='Email Address' name="" id="" />
                    <input type="password" placeholder='Password' name="" id="" />
                </div>
                <button>Continue</button>
                <p className="logsign-login">
                    Already have an account ? <span style={{ cursor: "pointer" }}>Login here</span>
                </p>
                <div className="logsign-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I agree to the terms of use & privacy </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
