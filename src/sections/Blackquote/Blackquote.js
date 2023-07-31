import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Quotemark from '../../assets/images/quote-mark.svg'
import quotecardimg1 from '../../assets/images/quote-img-left.svg'
import quotecardimg2 from '../../assets/images/quote-img-right-1.svg'
import quotecardimg3 from '../../assets/images/quote-img-right-2.svg'
import Blackquotecards from '../../components/Blackquotecards'
import Styles from './Blackquote.module.scss'

function Blackquote() {

    // Sample data for the cards
    const cardsData = [
        {
            imageUrl: quotecardimg1,
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem',
            txt1: 'Floyd Miles',
            txt2: 'Vice President, CLI',
        },
    ];
    const cardsData1 = [
        {
            imageUrl: quotecardimg2,
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem',
            txt1: 'Jane Cooper',
            txt2: 'CEO, JPNL',
            margin: '3rem 9rem 0rem 0rem'
        },
        {
            imageUrl: quotecardimg3,
            paragraph: 'LemonWares saved our time in Hosting my company page.',
            txt1: 'Kristin Watson',
            txt2: 'Co-Founder, LeeveOn Branding',
            margin: '3rem 13rem 0rem 0rem'
        },
    ];
    return (
        <Container className={`pb-5 ${Styles.quoteContainer}`}>
            <Row>
                <Col lg={6}>
                    <div className={Styles.cardLeftTop}>
                        <img src={Quotemark} className={`img-fluid ${Styles.imgQuote}`} />
                        <div className={Styles.quoteHeadLeft}>
                            <span>Real Stories from <br />Real Customers</span>
                            <p>Get inspired by these stories.</p>
                        </div>
                    </div>
                    {cardsData.map((cards, index) => (
                        <div key={index} >
                            <Blackquotecards 
                                imageUrl={cards.imageUrl}
                                paragraph={cards.paragraph}
                                txt1={cards.txt1}
                                txt2={cards.txt2}
                                margin='9rem 0rem 0rem 9rem'
                                boxShadow='0px 10px 20px rgba(41, 41, 42, 0.07)'
                            />
                        </div>
                    ))}
                </Col>
                <Col lg={6}>
                {cardsData1.map((cards, index) => (
                        <div key={index} className="col">
                            <Blackquotecards 
                                imageUrl={cards.imageUrl}
                                paragraph={cards.paragraph}
                                txt1={cards.txt1}
                                txt2={cards.txt2}
                                margin={cards.margin}
                                boxShadow='0px 10px 20px rgba(41, 41, 42, 0.07)'
                            />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Blackquote