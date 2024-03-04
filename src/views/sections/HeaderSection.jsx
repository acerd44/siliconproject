import React, { useState } from 'react'
import Logo from './../../assets/logo.svg'
import Account_Button from './../../assets/icons/signinup_btn.svg'
import { Link, NavLink } from 'react-router-dom'

const HeaderSection = () => {

    return (
        <header className="navbar">
            <Link className="silicon-logo" to="/">
                <img src={Logo} />
            </Link>
            <nav className="navbar-menu">
                <NavLink className="navbar-menu-link">Overview</NavLink>
                <NavLink className="navbar-menu-link">Features</NavLink>
                <NavLink className="navbar-menu-link">News</NavLink>
                <NavLink className="navbar-menu-link">Contact</NavLink>
            </nav>
            <div className="btn-theme">
                <input type='checkbox' className="checkbox" id="chk" />
                <label className="label" for="chk">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <div className="ball"></div>
                </label>
            </div>
            <div>
                <NavLink className="btn-account" ><img src={Account_Button} /></NavLink>
            </div>
        </header>
    )
}

export default HeaderSection