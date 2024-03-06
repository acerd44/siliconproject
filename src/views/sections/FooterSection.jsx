import React from 'react'
import Logo from './../../assets/logo.svg'
import Appstore from './../../assets/appstore.svg'
import Googleplay from './../../assets/googleplay.svg'
import { NavLink, Link } from 'react-router-dom'

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="navbar-brand silicon-brand">
          <img src={Logo} />
        </div>
        <nav className="navbar-footer">
          <NavLink to="/" className="navbar-footer-link">Overview</NavLink>
          <NavLink to="/features" className="navbar-footer-link">Features</NavLink>
          <NavLink to="/news" className="navbar-footer-link">News</NavLink>
          <NavLink to="/contact" className="navbar-footer-link">Contact</NavLink>
          <NavLink to="/account" className="navbar-footer-link" >Account</NavLink>
        </nav>
        <div className="btns-download">
          <Link to="*" className="btn-appstore"><img src={Appstore} /></Link>
          <Link to="*" className="btn-googleplay"><img src={Googleplay} /></Link>
        </div>
        <div className="socials">
          <div className="social-buttons">
            <a href="#" className="btn btn-icon btn-secondary btn-facebook" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-instagram" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-twitter" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-icon btn-secondary btn-youtube" aria-label="Youtube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-text">
          <span>
            2024. All rights reserved.
            Pulvinar urna condimentum amet tempor, ornare integer.
            Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non.
            Feugiat in odio non nunc ornare consectetur.
          </span>
        </div>
      </div>
    </footer >
  )
}

export default FooterSection