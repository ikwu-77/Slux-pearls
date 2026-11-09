import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import site from '../Data/site.js'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <img src="/sluxlogo.jpeg" alt="Slux Pearl" className="footer-logo" />
      <span>Your beauty, your signature.</span>

      <div className="socials">
        <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        <a href={site.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><FaTiktok /></a>
        <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        <a href={site.x} target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
      </div>

      <div className="footer-links">
        <Link to="/size-guide">Size guide</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </div>
      <small>© {new Date().getFullYear()} Slux Pearl. All rights reserved.</small>
    </footer>
  )
}

export default Footer