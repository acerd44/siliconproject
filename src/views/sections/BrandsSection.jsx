import React from 'react'
import Brand_1 from './../../assets/brands/brand1.svg'
import Brand_2 from './../../assets/brands/brand2.svg'
import Brand_3 from './../../assets/brands/brand3.svg'
import Brand_4 from './../../assets/brands/brand4.svg'
import Brand_5 from './../../assets/brands/brand5.svg'
const BrandsSection = () => {
    return (
        <section className="brands">
            <div className="container">
                <div className="box"><img src={Brand_1} /></div>
                <div className="box"><img src={Brand_2} /></div>
                <div className="box"><img src={Brand_3} /></div>
                <div className="box"><img src={Brand_4} /></div>
                <div className="box"><img src={Brand_5} /></div>
            </div>
        </section>
    )
}

export default BrandsSection