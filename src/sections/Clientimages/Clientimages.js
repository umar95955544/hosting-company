import React from 'react'
import clientimg1 from '../../assets/images/cpanel.svg' 
import clientimg2 from '../../assets/images/imunify360.svg'
import clientimg3 from '../../assets/images/litespeed.svg'
import clientimg4 from '../../assets/images/softaculous.svg'
import clientimg5 from '../../assets/images/wordpress.svg'
import clientimg6 from '../../assets/images/cloudflare.svg'
import Styles from './Clientimages.module.scss'

function Clientimages() {
    return (
        <div className="container py-5">
            <div className="row">
                {/* First Column */}
                <div className="col-lg-6 text-center text-lg-start">
                    <h1>True Cloud Web  Hosting</h1>
                    <p>
                        True Cloud Web Hosting All of the hosting packages
                        we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated 
                        servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.
                    </p>
                </div>

                {/* Second Column */}
                <div className="col-lg-6 text-center pt-lg-0">
                    {/* Client Images */}
                    <div className="row pt-3 d-flex align-items-baseline">
                        <div className="col-md-4">
                            <img src={clientimg1} alt="Client 1" />
                        </div>
                        <div className={`col-md-4 ${Styles.imunify}`}>
                            <img src={clientimg2} alt="Client 2" />
                        </div>
                        <div className={`col-md-4 ${Styles.litespeed}`}>
                            <img src={clientimg3} alt="Client 3" />
                        </div>
                    </div>
                    <div className="row pt-3 d-flex align-items-baseline">
                        <div className="col-md-4">
                            <img src={clientimg4} alt="Client 4" />
                        </div>
                        <div className="col-md-4">
                            <img src={clientimg5} alt="Client 5" />
                        </div>
                        <div className="col-md-4">
                            <img src={clientimg6} alt="Client 6" />
                        </div>
                    </div>
                    {/* Add more rows if you have additional client images */}
                </div>
            </div>
        </div>

    )
}

export default Clientimages