import React from 'react'
import Logo from './../../assets/logo_white_text.svg'
import DarkSubscribeButton from '../components/DarkSubscribeButton'
const ContactFooterSection = () => {
    return (
        <footer className="contact-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="silicon-brand">
                            <img src={Logo} />
                        </div>
                        <p className="desc">
                            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit.
                            Lacus, eget eu vitae nullam proin turpis etiam mi sit.
                            Non feugiat feugiat egestas nulla nec.
                            Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.
                        </p>
                        <DarkSubscribeButton />
                    </div>
                    <div className="col-6">
                        <div className="footer-links row">
                            <div className="col-4 links">
                                <div id="links">
                                    <ul className="footer-ul page-ul">
                                        <li><a href="#">Home</a> </li>
                                        <li><a href="#">Features</a> </li>
                                        <li><a href="#">News</a> </li>
                                        <li><a href="#">Contact</a> </li>
                                    </ul>
                                    <ul className="footer-ul info-ul">
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 links">
                                <div id="links">
                                    <ul className="footer-ul page-ul">
                                        <li> <a href="#">Facebook</a></li>
                                        <li> <a href="#">LinkedIn</a></li>
                                        <li> <a href="#">Twitter</a></li>
                                        <li> <a href="#">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-4 contact-us-email">
                                <h6>Contact Us</h6>
                                <a href="#">email@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="rights">
                    <span>2024. All rights reserved. Silicon Template</span>
                </p>
            </div>
        </footer>
    )
}

export default ContactFooterSection