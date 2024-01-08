import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

    const [state, setstate] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })

    const changehandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const login = async () => {
        // console.log('Login function', formData)
        let responeData;
        await fetch(`${process.env.API_KEY}/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json())
            .then((data) => responeData = data)

        if (responeData.success) {
            localStorage.setItem('auth-token', responeData.token);
            window.location.replace('/')
        }
        else {
            alert(responeData.errors)
        }
    }

    const signup = async () => {
        // console.log('Signup function', formData)

        let responeData;
        await fetch(`${process.env.API_KEY}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json())
            .then((data) => responeData = data)

        if (responeData.success) {
            localStorage.setItem('auth-token', responeData.token);
            window.location.replace('/')
        }
        else {
            alert(responeData.errors)
        }
    }

    return (
        <div className='logsign'>
            <div className="logsign-container">
                <h1>{state}</h1>
                <div className="logsign-fields">
                    {state === "Sign up" ? <input type="text" placeholder='Your name' name="username" value={formData.username} onChange={changehandler} id="" /> : <></>}
                    <input type="email" placeholder='Email Address' value={formData.email} onChange={changehandler} name="email" />
                    <input type="password" placeholder='Password' name="password" value={formData.password} onChange={changehandler} />
                </div>
                <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
                {state === "Sign up" ?
                    <p className="logsign-login">
                        Already have an account ? <span onClick={() => setstate("Login")} style={{ cursor: "pointer" }}>Login here</span>
                    </p> :
                    <p className="logsign-login">
                        Create an account <span onClick={() => setstate("Sign up")} style={{ cursor: "pointer" }}>Click here</span>
                    </p>
                }
                <div className="logsign-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I agree to the terms of use & privacy </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
