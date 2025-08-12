import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>ᖘr𝔞τik🎯</h1>
                <p>I am a full-stack developer and freelancer from Pune, India</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""></img>
                    <input type='email' placeholder='Enter Your Email'></input>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Pratik Thengane. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
