import React from 'react'

const InfoSection = () => {
    return (
        <section className="info-section">
            <div className="container">
                <div className="row">
                    <div className="col-6 location-container">
                        <div className="location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5020.057277316842!2d-122.40737351959179!3d37.73986147046842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5ce6be90058bc85!2sOur%20Planet%20Recycling%20S.F.!5e0!3m2!1sen!2sua!4v1653946944869!5m2!1sen!2sua"
                                allowFullScreen="" loading="lazy" title="Map"></iframe>
                        </div>
                    </div>
                    <div className="col-5 location-info-container">
                        <h4>Medical Center 1</h4>
                        <ul className="center-info">
                            <li className="pb-1 mb-2">
                                <i className="fa-regular fa-location-dot"></i>
                                445 Bayshor Blvd, San Francisco, CA 94124
                            </li>
                            <li className="pb-1 mb-2">
                                <i className="fa-regular fa-phone-volume"></i>
                                (406) 555-0120
                            </li>
                            <li>
                                <i className="fa-regular fa-clock"></i>
                                <div>
                                    <strong className="text-nav">Mon - Fri</strong>
                                    : 9:00 am - 22:00 am
                                    <br />
                                    <strong className="text-nav">Sat - Sun</strong>
                                    : 9:00 am - 20:00 am
                                </div>
                            </li>
                        </ul>
                        <h4>Medical Center 2</h4>
                        <ul className="center-info">
                            <li className="pb-1 mb-2">
                                <i className="fa-regular fa-location-dot"></i>
                                2464 Royal Ln. Mesa, New Jersey 45463
                            </li>
                            <li className="pb-1 mb-2">
                                <i className="fa-regular fa-phone-volume"></i>
                                (406) 544-0123
                            </li>
                            <li>
                                <i className="fa-regular fa-clock"></i>
                                <div>
                                    <strong className="text-nav">Mon - Fri</strong>
                                    : 9:00 am - 22:00 am
                                    <br />
                                    <strong className="text-nav">Sat - Sun</strong>
                                    : 9:00 am - 20:00 am
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default InfoSection