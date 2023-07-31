import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Top from '../../assets/images/top.svg'
import Left from '../../assets/images/left.svg'
import Right from '../../assets/images/right.svg'
import Whatsapp from '../../assets/images/whatsapp.svg'
import Styles from './Footertop.module.scss'

function Footertop() {
    return (
        <Container className={`my-5 ${Styles.footerUp}`}>
            <Row>
                <Col>
                    <img src={Top} alt="Client 2" className={Styles.topImg}/>
                    <img src={Left} alt="Client 2" className={Styles.leftImg}/>
                    <img src={Right} alt="Client 2" className={Styles.rightImg}/>
                    <div className={`text-center ${Styles.textAreaFooterUp}`}>
                        <p className={Styles.txtfooterUp}>We're here to make your website awesome.</p>
                        <button className={` rounded-0 ${Styles.footerupBtn}`}>
                            <div className="d-flex flex-row">
                                <img src={Whatsapp} className="img-fluid" />
                                <a href="#" className="text-decoration-none text-white pl-1">Get  in touch with us</a>
                            </div>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footertop