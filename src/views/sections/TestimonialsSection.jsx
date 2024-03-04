import React from 'react'

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 pt-2">
                        <h1>Clients are Loving Our App</h1>
                        <div className="buttons">
                            <button className="btn btn-prev btn-icon">
                                <i className="fa fa-chevron-left"></i>
                            </button>
                            <button className="btn btn-next btn-icon">
                                <i className="fa fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="testimonials col-lg-8">
                        <div>
                            <div className="testimonial-card-body">
                                <div className="testimonial-card">
                                    <div className="card">
                                        <span className="btn btn-primary">
                                            <i className="fa-solid fa-quote-left"></i>

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TestimonialsSection