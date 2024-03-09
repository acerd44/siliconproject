import React from 'react'
import Forecast from './../../assets/features/forecast.svg'
import Contacts from './../../assets/features/contacts.svg'
import Card from './../../assets/features/card.svg'
import Send_Money_To from './../../assets/features/sendmoneyto.svg'
import Credit_Card from './../../assets/icons/credit-card.svg'
import Wallet from './../../assets/icons/wallet.svg'
const MoreFeaturesSection = () => {
    return (
        <section className="more-features-section">
            <div className="container">
                <div className="section-one row">
                    <div className="section-one-images col-md-6">
                        <div className="section-one-image-one">
                            <img src={Forecast} className="d-block" />
                            <div className="section-one-image-two">
                                <img src={Send_Money_To} className="d-block" />
                            </div>
                        </div>
                    </div>
                    <div className="section-one-text col-md-6">
                        <h2>Make your money transfer simple and clear</h2>
                        <ul>
                            <li>
                                <i className="fa-regular fa-check-circle"></i>
                                Banking transactions are free for you
                            </li>
                            <li>
                                <i className="fa-regular fa-check-circle"></i>
                                No monthly cash commission
                            </li>
                            <li>
                                <i className="fa-regular fa-check-circle"></i>
                                Manage payments and transactions online
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary" >Learn more&nbsp;&nbsp;
                            <i className="fa-solid fa-arrow-right"> </i></a>
                    </div>
                </div>
                <div className="section-two row">
                    <div className="section-two-images col-6">
                        <div className="section-two-image-one">
                            <img src={Contacts} className="d-block" />
                            <div className="section-two-image-two">
                                <img src={Card} className="d-block" />
                            </div>
                        </div>
                    </div>
                    <div className="section-two-text col-6">
                        <h2>Receive payment from<br />international bank details</h2>
                        <div className="row row-cols-2 text-start pb-3">
                            <div className="col pb-4">
                                <div className="d-table">
                                    <img src={Credit_Card} />
                                </div>
                                <p className="mb-0">
                                    Manage your payments online. Mollis congue egestas egestas fermentum fames.
                                </p>
                            </div>
                            <div className="col pb-4">
                                <div className="d-table">
                                    <img src={Wallet} />
                                </div>
                                <p className="mb-0">
                                    A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.
                                </p>
                            </div>
                        </div>
                        <a href="#" className="btn btn-primary" >Learn more&nbsp;&nbsp;
                        <i className="fa-solid fa-arrow-right"> </i></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MoreFeaturesSection