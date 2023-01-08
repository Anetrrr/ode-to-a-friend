import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
const Footer = () => {
  return (
    <footer id='footer'>
      <Link to="/" className="footer_logo">ZAINAB</Link>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Experience with Zainab</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ZAINAB ADEDEJI. All rights reserved.</small>
        <div>
          <small> Developed by Abiodun Olonade.</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer