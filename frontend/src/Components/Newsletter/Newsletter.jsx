import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers on your email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter
