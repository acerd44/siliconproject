import React from 'react'
import Image_1 from './../../assets/mobile-howdoesitwork_1.svg'
import Image_2 from './../../assets/mobile-howdoesitwork_2.svg'
import Image_3 from './../../assets/mobile-howdoesitwork_3.svg'
const HowSection = () => {
    return (
        <section className="how-section">
            <div className="container">
                <h1 className="h1-how">How Does It Work?</h1>
                <div className="position-relative mx-5">
                    <button className="btn btn-prev btn-icon">
                        <i className="fa fa-chevron-left"></i>
                    </button>
                    <div className="mobile-images">
                        <img src={Image_1} className="mobile-image opacity-70" />
                        <img src={Image_2} className="mobile-image" />
                        <img src={Image_3} className="mobile-image opacity-70" />
                    </div>
                    <button className="btn btn-next btn-icon">
                        <i className="fa fa-chevron-right"></i>
                    </button>
                </div>
                <div className="step-2">
                    <h3>Step 2. Latest transaction history</h3>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu<br />sociis tristique quisque hac in consectetur condimentum.</p>
                </div>
            </div>
        </section >
    )
}

export default HowSection