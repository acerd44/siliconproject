import React from 'react'
import Logo from './../../assets/logo.svg'
import Account_Button from './../../assets/icons/signinup_btn.svg'
import { Link, NavLink } from 'react-router-dom'

const HeaderSection = () => {

    return (
        <header className="navbar">
            <Link className="silicon-logo" to="/siliconproject">
                <img src={Logo} />
            </Link>
            <nav className="navbar-menu">
                <NavLink to="/siliconproject/" className="navbar-menu-link">Overview</NavLink>
                <NavLink to="/siliconproject/features" className="navbar-menu-link">Features</NavLink>
                <NavLink to="/siliconproject/news" className="navbar-menu-link">News</NavLink>
                <NavLink to="/siliconproject/contact" className="navbar-menu-link">Contact</NavLink>
            </nav>
            <div className="btn-theme">
                <input type='checkbox' className="checkbox" id="chk" />
                <label className="label" htmlFor="chk">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <div className="ball"></div>
                </label>
            </div>
            <div>
                <Link className="btn-account" to="/siliconproject/account"><img src={Account_Button} /></Link>
            </div>
        </header>
    )
}

export default HeaderSection