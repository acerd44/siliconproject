import React from 'react'

const FAQSection = () => {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="row faq">
                    <div className="any-questions col-xl-4 col-md-5">
                        <h2>
                            Any questions?
                            <br />
                            Check out the FAQs
                        </h2>
                        <p>
                            Still have unanswered questions and need to get in touch?
                        </p>
                        <div className="row row-cols-2">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="faq-btn call">
                                            <i className="fa-solid fa-phone-volume"></i>
                                            <p>Still have questions?</p>
                                            <a href="#" className="btn btn-primary">
                                                Call Us
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body card-hover">
                                        <div className="faq-btn chat">
                                            <i className="fa-regular fa-comment"></i>
                                            <p>Still have questions?</p>
                                            <a href="#" className="btn btn-primary">
                                                Call Us
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-accordions col-md-7 offset-xl-1">
                        <div className="accordion" id="faq">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="q1-heading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q1" aria-expanded="true" aria-controls="#q1">
                                        Is any of my personal information stored in the App?
                                    </button>
                                </h2>
                                <div id="q1" className="accordion-collapse collapse show" aria-labelledby="q1-heading" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>
                                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                                            Viverra aliquam arcu, viverra et, cursus.
                                            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
                                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                        </p>
                                        <p>
                                            Ornare senectus fusce dignissim ut.
                                            Integer consequat in eu tortor, faucibus et lacinia posuere.
                                            Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                                            Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                            Dignissim amet adipiscing massa integer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="q2-heading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q2" aria-expanded="false" aria-controls="#q2">
                                        What formats can I download my transaction history in?
                                    </button>
                                </h2>
                                <div id="q2" className="accordion-collapse collapse" aria-labelledby="q2-heading" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>
                                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                                            Viverra aliquam arcu, viverra et, cursus.
                                            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
                                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                        </p>
                                        <p>
                                            Ornare senectus fusce dignissim ut.
                                            Integer consequat in eu tortor, faucibus et lacinia posuere.
                                            Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                                            Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                            Dignissim amet adipiscing massa integer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="q3-heading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q3" aria-expanded="false" aria-controls="#q3">
                                        Can I schedule future transfers?
                                    </button>
                                </h2>
                                <div id="q3" className="accordion-collapse collapse" aria-labelledby="q3-heading" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>
                                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                                            Viverra aliquam arcu, viverra et, cursus.
                                            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
                                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                        </p>
                                        <p>
                                            Ornare senectus fusce dignissim ut.
                                            Integer consequat in eu tortor, faucibus et lacinia posuere.
                                            Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                                            Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                            Dignissim amet adipiscing massa integer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="q4-heading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q4" aria-expanded="false" aria-controls="#q4">
                                        When can I use Banking App services?
                                    </button>
                                </h2>
                                <div id="q4" className="accordion-collapse collapse" aria-labelledby="q4-heading" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>
                                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                                            Viverra aliquam arcu, viverra et, cursus.
                                            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
                                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                        </p>
                                        <p>
                                            Ornare senectus fusce dignissim ut.
                                            Integer consequat in eu tortor, faucibus et lacinia posuere.
                                            Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                                            Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                            Dignissim amet adipiscing massa integer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="q5-heading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q5" aria-expanded="false" aria-controls="#q5">
                                        Can I create my own password that is easy for me to remember?
                                    </button>
                                </h2>
                                <div id="q5" className="accordion-collapse collapse" aria-labelledby="q5-heading" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>
                                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                                            Viverra aliquam arcu, viverra et, cursus.
                                            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
                                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                        </p>
                                        <p>
                                            Ornare senectus fusce dignissim ut.
                                            Integer consequat in eu tortor, faucibus et lacinia posuere.
                                            Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                                            Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                            Dignissim amet adipiscing massa integer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="q6-heading">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#q6" aria-expanded="false" aria-controls="#q6">
                                        What happens if I forget or lose my password?
                                    </button>
                                </h2>
                                <div id="q6" className="accordion-collapse collapse" aria-labelledby="q6-heading" data-bs-parent="#faq">
                                    <div className="accordion-body">
                                        <p>
                                            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
                                            Viverra aliquam arcu, viverra et, cursus.
                                            Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit.
                                            Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
                                            Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                        </p>
                                        <p>
                                            Ornare senectus fusce dignissim ut.
                                            Integer consequat in eu tortor, faucibus et lacinia posuere.
                                            Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate.
                                            Quis egestas aliquam nunc purus lacus, elit leo elit facilisi.
                                            Dignissim amet adipiscing massa integer.
                                        </p>
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

export default FAQSection