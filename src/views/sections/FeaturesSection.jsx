import React from 'react'
import Mobile_App_Features from './../../assets/mobile-appfeatures.svg'
import Feature_1 from './../../assets/icons/feature_1.svg'
import Feature_2 from './../../assets/icons/feature_2.svg'
import Feature_3 from './../../assets/icons/feature_3.svg'
import Feature_4 from './../../assets/icons/feature_4.svg'
import Feature_5 from './../../assets/icons/feature_5.svg'
import Feature_6 from './../../assets/icons/feature_6.svg'
const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="mobile-app-features">
                    <img src={Mobile_App_Features} />
                </div>
                <div className="features-desc">
                    <h1>App Features</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <div className="features">
                    <div className="row row-cols-2">
                        <div className="col">
                            <div className="d-flex">
                                <div className="d-table">
                                    <img src={Feature_1} />
                                </div>
                                <div>
                                    <h3>Easy Payments</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex">
                                <div className="d-table">
                                    <img src={Feature_2} />
                                </div>
                                <div>
                                    <h3>Data Security</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex">
                                <div className="d-table">
                                    <img src={Feature_3} />
                                </div>
                                <div>
                                    <h3>Cost Statistics</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex ">
                                <div className="d-table">
                                    <img src={Feature_4} />
                                </div>
                                <div>
                                    <h3>Support 24/7</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex ">
                                <div className="d-table">
                                    <img src={Feature_5} />
                                </div>
                                <div>
                                    <h3>Regular Cashback</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex ">
                                <div className="d-table">
                                    <img src={Feature_6} />
                                </div>
                                <div>
                                    <h3>Top Standards</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis
                                        ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection