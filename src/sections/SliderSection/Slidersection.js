import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import client1 from '../../assets/images/slider-img-1.svg'
import client2 from '../../assets/images/slider-img-2.svg'
import client3 from '../../assets/images/slider-img-3.svg'
import client4 from '../../assets/images/slider-img-4.svg'
import client5 from '../../assets/images/slider-img-5.svg'
import client6 from '../../assets/images/slider-img-6.svg'
import Styles from './Slidersection.module.scss'


function Slidersection() {
    // Slick slider settings
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed:1000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
        <Row className='py-5 d-flex align-items-center'>
            <Col lg={6} className='text-center text-lg-start'>
                <h2 className={Styles.sliderHeading}>We serve over 100 Nigerian Websites</h2>
                <p className={Styles.sliderP}>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
            </Col>
            <Col lg={6}>
            <Slider {...sliderSettings}> 
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={client1} alt="Client 1" />
                <img src={client4} alt="Client 4" />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={client2} alt="Client 2" />
              <img src={client5} alt="Client 5" />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={client3} alt="Client 3" />
              <img src={client6} alt="Client 6" />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={client3} alt="Client 4" />
              <img src={client2} alt="Client 5" />
                </div>
                
          </Slider>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Slidersection