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
        <li><a href="#about">About </a></li>
        <li><a href="#testimonials">Working with Zainab</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/zainaboyindamola.adedeji/"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://www.twitter.com/miz_tohun"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ZAY | All rights reserved.</small>
        <div>
          <small> Designed and Developed for Zainab </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer