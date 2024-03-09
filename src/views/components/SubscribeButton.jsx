import React, { useState } from 'react'

const SubscribeButton = () => {
    const [email, setEmail] = useState('')
    const emailValidation = (input) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (regex.test(input) && input.length > 0) {
            return 'is-valid'
        } else if (!regex.test(input) && input.length > 0) {
            return 'is-invalid'
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (emailValidation(email) === 'is-invalid') {
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
                alert('Thanks for subscribing to our newsletter!');
            }
        } catch (error) {
            console.error('Error: ', error)
        }
    }
    return (
        <form className="input-group" onSubmit={handleSubmit} noValidate>
            <input type="email" id="subscribe-email" value={email} onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${emailValidation(email)}`}
                placeholder="Your email" required />
            <i className="sub-envelope fa-regular fa-envelope"></i>
            <div className="invalid-tooltip">Please provide a valid email address.</div>
            <div className="valid-tooltip"></div>
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
    )
}

export default SubscribeButton