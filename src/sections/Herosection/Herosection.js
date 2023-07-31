import React, {useState} from 'react'
import { Tab, Nav } from 'react-bootstrap';
import imageSrc from '../../assets/images/hero-img.svg'
import Headerbtn from '../../components/Headerbtn';
import Styles from './Herosection.module.scss';

function Herosection() {
  const [activeTab, setActiveTab] = useState('first');

  return (
    <>
    <div className="container py-5">
      <div className="row">
        {/* Column 1 */}
        <div className="col-lg-6 text-center text-lg-start" id="heronav">
          <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
            <Nav variant="tabs" className=" border-0 d-flex justify-content-center justify-content-lg-start">
              <Nav.Item>
                <Nav.Link eventKey="first" className={`${Styles.navHead} ${activeTab === 'first' ? Styles.active : ''}`}>Hosting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className={`${Styles.navHead} ${activeTab === 'second' ? Styles.active : ''}`}>Domain</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className={`${Styles.navHead} ${activeTab === 'third' ? Styles.active : ''}`}>SEO</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className={`${Styles.navHead} ${activeTab === 'fourth' ? Styles.active : ''}`}>Email</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first" >
                <h2 className={`py-4 ${Styles.navTabOne}`}>Premium Web Hosting for Your Website</h2>
                <p className='text-black-50 py-4'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className={Styles.btnHero}>
                    <Headerbtn 
                    label={"Create an Account"} 
                    color='white' 
                    border='1px solid #B00000'
                    backgroundColor='#B00000'
                    padding='12px' 
                    borderRadius='8px'
                    boxShadow='0px 0px 64px 0px #B000004D'
                    />
                    <Headerbtn 
                    label={"Choose your plan"}
                    border='1px solid #000000'
                    color='black'
                    backgroundColor='white'
                    padding='12px' 
                    borderRadius='8px'
                    marginLeft='1rem'
                    boxShadow='none'
                    />
                </div>
                {/* Add your content for Tab 1 here */}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <h2 className={`py-4 ${Styles.navTabOne}`}>Choose Domain for Your Website</h2>
                <p className='text-black-50 py-4'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className={Styles.btnHero}>
                <Headerbtn 
                    label={"Create an Account"} 
                    color='white' 
                    border='1px solid #B00000'
                    backgroundColor='#B00000'
                    padding='12px' 
                    borderRadius='8px'
                    boxShadow='0px 0px 64px 0px #B000004D'
                    />
                    <Headerbtn 
                    label={"Choose your plan"}
                    border='1px solid #000000'
                    color='black'
                    backgroundColor='white'
                    padding='12px' 
                    borderRadius='8px'
                    marginLeft='1rem'
                    />
                </div>
                {/* Add your content for Tab 2 here */}
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <h2 className={`py-4 ${Styles.navTabOne}`}>Want SEO for Your Website</h2>
                <p className='text-black-50 py-4'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className={Styles.btnHero}>
                <Headerbtn 
                    label={"Create an Account"} 
                    color='white' 
                    border='1px solid #B00000'
                    backgroundColor='#B00000'
                    padding='12px' 
                    borderRadius='8px'
                    boxShadow='0px 0px 64px 0px #B000004D'
                    />
                    <Headerbtn 
                    label={"Choose your plan"}
                    border='1px solid #000000'
                    color='black'
                    backgroundColor='white'
                    padding='12px' 
                    borderRadius='8px'
                    marginLeft='1rem'
                    />
                </div>
                {/* Add your content for Tab 3 here */}
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
              <h2 className={`py-4 ${Styles.navTabOne}`}>Choose Email for Your Website</h2>
                <p className='text-black-50 py-4'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className={Styles.btnHero}>
                <Headerbtn 
                    label={"Create an Account"} 
                    color='white' 
                    border='1px solid #B00000'
                    backgroundColor='#B00000'
                    padding='12px' 
                    borderRadius='8px'
                    boxShadow='0px 0px 64px 0px #B000004D'
                    />
                    <Headerbtn 
                    label={"Choose your plan"}
                    border='1px solid #000000'
                    color='black'
                    backgroundColor='white'
                    padding='12px' 
                    borderRadius='8px'
                    marginLeft='1rem'
                    />
                </div>
                {/* Add your content for Tab 3 here */}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

        {/* Column 2 */}
        <div className={`col-lg-6  d-flex justify-content-center ${Styles.bannerImg}`}>
          <img src={imageSrc} alt="Your Image" className="img-fluid" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Herosection