import React from 'react'
import Appstore from './../../assets/appstore.svg'
import Googleplay from './../../assets/googleplay.svg'
import Phones from './../../assets/showcase-mobiles.svg'
import { Link } from 'react-router-dom'

const ShowcaseSection = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="desc">
                    <h1>
                        Manage All Your Money in One App
                    </h1>
                    <p>
                        We offer you a new generation of the mobile banking. <br />Save, spend & manage money in your pocket.
                    </p>

                    <div className="btns-download">
                        <Link to="*" className="btn-appstore"><img src={Appstore} /></Link>
                        <Link to="*" className="btn-googleplay"><img src={Googleplay} /></Link>
                    </div>
                    <div className="discover-more">
                        <a>
                            <button className="btn btn-next btn-icon">
                                <i className="fa fa-chevron-down"></i>

                            </button>
                            <span>Discover more</span>
                        </a>
                    </div>

                </div>
                <img className="phones" src={Phones} />
            </div>

        </section>
    )
}

export default ShowcaseSection