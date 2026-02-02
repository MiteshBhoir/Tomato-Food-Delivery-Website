import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Your one-stop shop for fresh, organic produce and quality groceries. Delivered straight to your door for a healthier, happier life!</p>
          <div className="footer-social-icon">
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>9653363363</li>
            <li>contact@tomato.com</li>
          </ul>

        </div>
      </div>
       <hr  />
      <div className="footer-copyright">CopyRight 2025 &copy;Tomato.com -  All rights Reserved</div>
    </div>
  )
}

export default Footer