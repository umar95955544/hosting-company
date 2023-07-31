import React, { useState } from 'react'
import Pricingcards from '../../components/Pricingcards'
import { Tab, Nav } from 'react-bootstrap';
import Styles from './Pricingtable.module.scss';

function Pricingtable() {
    const [activeTab, setActiveTab] = useState('first');
    const [isMonthly, setIsMonthly] = useState(true);
    const [price, setPrice] = useState('');
    const [yearlyPrice, setyearlyPrice] = useState('');

    const handleToggle = () => {
        setIsMonthly((prevIsMonthly) => !prevIsMonthly);
        // Update the price based on the toggle for the currently selected card
        const selectedCard = isMonthly ? cardsData[1] : cardsData[0]; // Update the card selection order
        console.log(selectedCard);
        setPrice(isMonthly ? selectedCard.price : selectedCard.yearlyPrice);
        console.log(setPrice);
        setyearlyPrice(isMonthly ? selectedCard.yearlyPrice : selectedCard.price);
        console.log(setyearlyPrice);
    };
    const handleTabChange = (key) => {
        setActiveTab(key);
      };
    const cardsData = [
        {
            heading: 'Starter',
            heading2: 'Standard',
            paragraph: 'with all your customers via all conversation channels in one central dashboard.',
            price: '$2.80',
            yearlyPrice: '$45.60',
            month: 'Per month',
            buttonLabel: 'Choose this Plan',
            features: [
                '2GB SSD',
                '10GB Bandwidth',
                '15 Email Accounts',
                'Unlimited Database',
                '4 Subdomains',
                '1 Parked Domain',
                '2 Websites',
                'Free SSL',
                'Softaculous'
            ],
        },
        {
            heading: 'Basic',
            heading2: 'Professional',
            paragraph: 'with all your customers via all conversation channels in one central dashboard.',
            price: '$3.80',
            yearlyPrice: '$60.60',
            month: 'Per month',
            buttonLabel: 'Choose this Plan',
            features: [
                '2GB SSD',
                '10GB Bandwidth',
                '15 Email Accounts',
                'Unlimited Database',
                '4 Subdomains',
                '1 Parked Domain',
                '2 Websites',
                'Free SSL',
                'Softaculous'
            ],
        },
        {
            heading: 'Premium',
            heading2: 'Suprem',
            paragraph: 'with all your customers via all conversation channels in one central dashboard.',
            price: '$5.80',
            yearlyPrice: '$100.60',
            month: 'Per month',
            buttonLabel: 'Choose this Plan',
            features: [
                '2GB SSD',
                '10GB Bandwidth',
                '15 Email Accounts',
                'Unlimited Database',
                '4 Subdomains',
                '1 Parked Domain',
                '2 Websites',
                'Free SSL',
                'Softaculous'
            ],
        },
       

    ];
    return (
        <>
            <div className='container'>
                <div className='row text-center pt-5'>
                    <div className='col'>
                        <h1>Ready to get started with Lemon Wares?</h1>
                        <p>Choose the package that suits you</p>
                    </div>
                </div>
                <div className="row py-2">
                    <div className='d-flex justify-content-center align-items-center'>
                        <p className=' m-0'>Monthly</p>
                        <label class={Styles.switch}>
                            <input type="checkbox" id="checbox" onClick={handleToggle} />
                            <span class={`${Styles.slider} ${Styles.round}`}></span>
                        </label>
                        <p className={Styles.yearlyText}>Yearly</p>
                        <p className={`badge m-0 ${Styles.badgeyearly}`}>20% discount</p>
                    </div>
                </div>
                <div className='row'>
                    <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                        <Nav variant="tabs" className={`border-0 py-5 text-center justify-content-center ${Styles.navMain}`}>
                            <Nav.Item className='w-50'>
                                <Nav.Link eventKey="first" className={`fw-bold ${Styles.navBasic} ${activeTab === 'first' ? Styles.active : ''}`}>Basic</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='w-50'>
                                <Nav.Link eventKey="second" className={`fw-bold ${Styles.navPremium} ${activeTab === 'second' ? Styles.active : ''}`}>Premium</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" >
                                <div className='d-flex flex-md-column flex-lg-row flex-sm-column flex-column'>
                                    {cardsData.map((cards, index) => (
                                        <div key={index} className="col-lg-4 col-12" >
                                            <Pricingcards
                                                heading={cards.heading}
                                                paragraph={cards.paragraph}
                                                price={isMonthly ? cards.price : cards.yearlyPrice}
                                                month={cards.month}
                                                buttonLabel={cards.buttonLabel}
                                                features={cards.features}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Add your content for Tab 1 here */}
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <div className='d-flex flex-md-column flex-lg-row flex-sm-column flex-column'>
                                    {cardsData.map((cards, index) => (
                                        <div key={index} className="col-lg-4 col-12">
                                            <Pricingcards
                                                heading={cards.heading2}
                                                paragraph={cards.paragraph}
                                                price={isMonthly ? cards.price : cards.yearlyPrice}
                                                month={cards.month}
                                                buttonLabel={cards.buttonLabel}
                                                features={cards.features}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* Add your content for Tab 1 here */}
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </div>
            </div>
        </>
    )
}

export default Pricingtable