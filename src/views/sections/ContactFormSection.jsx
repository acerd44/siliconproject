import React from 'react'

const ContactFormSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let showValidationErrors = true;
        if (!e.target.checkValidity()) {
            e.stopPropagation()
            showValidationErrors = true;
        } else {
            showValidationErrors = false;
            const contactForm = {
                fullname: e.target['fullname'].value,
                email: e.target['email'].value,
                specialist: e.target['specialist'].value,
                date: e.target['date'].value,
                time: e.target['time'].value
            }

            fetch('https://kyhnet23-assignment.azurewebsites.net/api/book-appointment', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(contactForm)
            })
                .then(res => {
                    if (res.ok) {
                        alert("Thanks for choosing Silicon! Your appointment has been made.")
                        e.target.reset()
                    }
                })
        }
        if (showValidationErrors)
            e.target.classList.add('was-validated')
    }
    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="breadcrumb-container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">
                                <i className="fa-regular fa-home"></i>
                                Home
                            </a>
                        </li>
                        <li className="breadcrumb-item active">
                            Contacts
                        </li>
                    </ol>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div>
                            <h1>Contact Us</h1>
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>
                                <div className="contact-text">
                                    <h2>
                                        Email us
                                    </h2>
                                    <p>
                                        Please feel free to drop us a line. We will respond as soon as possible.
                                    </p>
                                    <div className="btn">
                                        Leave a message
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-section">
                                <div className="contact-icon">
                                    <i className="fa-light fa-user-group"></i>
                                </div>
                                <div className="contact-text">
                                    <h2>
                                        Careers
                                    </h2>
                                    <p>
                                        Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
                                    </p>
                                    <div className="btn">
                                        Send an application
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card form-container">
                            <div className="card-body">
                                <h2 className="card-title">Get Online Consultation</h2>
                                <form onSubmit={handleSubmit} className="row g-4 needs-validation" id="contact-form" noValidate>
                                    <div>
                                        <label htmlFor="fullname" className="form-label">Full name</label>
                                        <input type="text" className="form-control" id="fullname" required />
                                        <div className="invalid-feedback">Please enter your full name!</div>
                                        <div className="valid-feedback"></div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" required />
                                        <div className="invalid-feedback">Please provide a valid email address!</div>
                                        <div className="valid-feedback"></div>
                                    </div>
                                    <div>
                                        <label htmlFor="specialist" className="form-label">Specalist</label>
                                        <select className="form-select form-control" id="specialist" required>
                                            <option value="" disabled="">Choose a specialist</option>
                                            <option value="Therapist">Therapist</option>
                                            <option value="Dentist">Dentist</option>
                                            <option value="Cardiologist">Cardiologist</option>
                                            <option value="Pediatrician">Pediatrician</option>
                                            <option value="Gynecologist">Gynecologist</option>
                                            <option value="Surgeon">Surgeon</option>
                                        </select>
                                        <div className="invalid-feedback">Choose a specialist from the list!</div>
                                        <div className="valid-feedback"></div>
                                    </div>
                                    <div className="date-time">
                                        <label htmlFor="date" className="form-label">Date</label>
                                        <input type="text" className="form-control"
                                            id="date" pattern="(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])" placeholder="mm/dd" required />
                                        <div className="invalid-feedback">Enter a date!</div>
                                    </div>
                                    <div className="date-time">
                                        <label htmlFor="time" className="form-label">Time</label>
                                        <input type="text" className="form-control"
                                            id="time" pattern="([01][0-9]|2[0-3]):[0-5][0-9]" placeholder="hh:mm" required />
                                        <div className="invalid-feedback">Enter a time!</div>
                                        <div className="valid-feedback"></div>
                                    </div>
                                    <div className="submit-button">
                                        <button type="submit" className="btn btn-primary">Make an appointment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-between"></div>
        </section >
    )
}

export default ContactFormSection