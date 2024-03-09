import React from 'react'
import Subscribe_Icon from './../../assets/icons/notif-icon.svg'
import SubscribeButton from '../components/SubscribeButton'

const SubscribeSection = () => {

    return (
        <section className="subscribe-section">
            <div className="container">
                <div className="bg-secondary">
                    <div className="row">
                        <div className="col-text col-5">
                            <div className="subscribe-text-container">
                                <img src={Subscribe_Icon} alt="" />
                                <div className="subscribe-text">
                                    <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="col-form">
                                <SubscribeButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection