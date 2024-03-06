import React, { useState } from 'react'
import Subscribe_Icon from './../../assets/icons/notif-icon.svg'

const SubscribeSection = () => {
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const emailValidation = (input) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(input)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!emailValidation(email)) {
            setErrorMessage('Please provide a valid email address')
            return;
        }
        try {
            const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/subscribe/?email=' + email, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
            if (response.ok) {
                setEmail('')
                setErrorMessage('')
                alert('Thanks for subscribing to our newsletter!');
            }
        } catch (error) {
            console.error('Error: ', error)
        }
    }
    return (
        <section className="subscribe-section">
            <div className="container">
                <div className="bg-secondary">
                    <div className="row">
                        <div className="col-text col-xl-5">
                            <div className="subscribe-text-container">
                                <img src={Subscribe_Icon} alt="" />
                                <div className="subscribe-text">
                                    <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="col-form">
                                <form className="input-group" onSubmit={handleSubmit} noValidate>
                                    <input type="email" id="subscribe-email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        className={`form-control ${errorMessage && !emailValidation(email) ? 'is-invalid' : ''}
                                        ${(emailValidation(email) && email.length > 0) ? 'is-valid' : ''}`}
                                        placeholder="Your email" required />
                                    <i className="fa-regular fa-envelope"></i>
                                    {errorMessage && <div className="invalid-tooltip">{errorMessage}</div>}
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection