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
                            <div className="feature-container">
                                <div className="feature-icon">
                                    <img src={Feature_1} />
                                </div>
                                <div className="feature-text">
                                    <h3>Easy Payments</h3>
                                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-container">
                                <div className="feature-icon">
                                    <img src={Feature_2} />
                                </div>
                                <div className="feature-text">
                                    <h3>Data Security</h3>
                                    <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-container">
                                <div className="feature-icon">
                                    <img src={Feature_3} />
                                </div>
                                <div className="feature-text">
                                    <h3>Cost Statistics</h3>
                                    <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-container">
                                <div className="feature-icon">
                                    <img src={Feature_4} />
                                </div>
                                <div className="feature-text">
                                    <h3>Support 24/7</h3>
                                    <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-container">
                                <div className="feature-icon">
                                    <img src={Feature_5} />
                                </div>
                                <div className="feature-text">
                                    <h3>Regular Cashback</h3>
                                    <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="feature-container">
                                <div className="feature-icon">
                                    <img src={Feature_6} />
                                </div>
                                <div className="feature-text">
                                    <h3>Top Standards</h3>
                                    <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
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