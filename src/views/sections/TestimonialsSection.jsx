import React from 'react'
import Profile_Img_1 from './../../assets/42.png'
import Profile_Img_2 from './../../assets/43.png'
const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="row">
                    <div className="col-3">
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
                    <div className="testimonials col-8">
                        <div>
                            <div className="testimonial-card-body">
                                <div className="testimonial-cards">
                                    <div className="card fannie-card">
                                        <span className="btn btn-primary">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </span>
                                        <div className="card-body">
                                            <div className="text-nowrap">
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
                                            <p>
                                                Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
                                                Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.
                                                Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
                                            </p>
                                        </div>
                                        <div className="card-footer fannie">
                                            <img src={Profile_Img_1} />
                                            <div className="fannie-name">
                                                <h6>Fannie Summers</h6>
                                                <span>Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card robert-card">
                                        <span className="btn btn-primary">
                                            <i className="fa-solid fa-quote-left"></i>
                                        </span>
                                        <div className="card-body">
                                            <div className="text-nowrap">
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                                <i className="fa-solid fa-star text-warning"></i>
                                            </div>
                                            <p>
                                                Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor.
                                                Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet.
                                                Dictum pretium dolor tincidunt egestas eget nunc.
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <img src={Profile_Img_2} className="robert" />
                                            <div className="robert-name">
                                                <h6>Robert Fox</h6>
                                                <span>QA Engineer</span>
                                            </div>
                                        </div>
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