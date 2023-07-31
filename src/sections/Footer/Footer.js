import React from 'react'
import Footersec from '../../components/Footersec';
import Footerlogo from '../../assets/images/footer-logo.svg'
import Styles from './Footer.module.scss'

function Footer() {
    // Sample data for the cards
    const cardsData = [
        {
          heading: 'Services',
          txt1:'Domain',
          txt2:'Shared Hosting',
          txt3:'Cloud Hosting',
          txt4:'Private Hosting',  
        },
        {
            heading: 'Hosting',
            txt1:'Cheap Hosting',
            txt2:'Hosting Wordpress',
            txt3:'Email Hosting',
            txt4:'Hosting Unlimited',   
        },
        {
            heading: 'Company',
            txt1:'About',
            txt2:'Career',
            txt3:'Contact Us',
        },
        {
            heading: 'Help',
            txt1:'FAQ',
            txt2:'Help support',
        },
        
      ];
      return (
        <>
        <div className={`container-fluid ${Styles.bgFooter}`}>
        <div className="container pt-4">
        <div className="row text-center text-md-start">
            <div className='col-md-4'>
              <img src={Footerlogo} />
              <p className="pt-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
            </div>
          {cardsData.map((cards, index) => (
            <div key={index} className="col-md-2 text-white">
              <Footersec
                heading={cards.heading}
                txt1={cards.txt1}
                txt2={cards.txt2}
                txt3={cards.txt3}
                txt4={cards.txt4}
              />
            </div>
          ))}
        </div>
        <div className='row text-center text-md-start'>
        <div class="col-12">
          <p className={`pt-md-5 pt-0 ${Styles.heart}`}>Built by Jeremiah with <i className="fa fa-heart" aria-hidden="true" ></i> in Lagos. Copyright 2021</p>
        </div>
        </div>
        </div>
        </div>
        </>
      )
}

export default Footer