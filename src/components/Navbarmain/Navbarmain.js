import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { Nav, Container, Navbar } from 'react-bootstrap';
import Sitelogo from '../../assets/images/logo.svg'
import Styles from './Navbarmain.module.scss';

function Navbarmain() {
  return (
    <>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Sitelogo}
            />
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between text-center text-lg-start'>
              <Nav className={`px-md-2 ${Styles.navbarService}`}>
                <Nav.Link href="#ourservices" className={Styles.blackLink}>Our Services</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#about" className={Styles.blackLink}>About</Nav.Link>
                <Nav.Link href="#blogandnews" className={`px-md-4 ${Styles.blackLink}`}>Blog&News</Nav.Link>
                <Nav.Link href="#contact" className={Styles.blackLink}>Contact</Nav.Link>
              </Nav>
              <Nav >
                <Nav.Link href="#account" className={`px-md-4 ${Styles.accountLink}`}>Account</Nav.Link>
                <Nav.Link href="#phone" className={`px-md-4 ${Styles.blackLink}`}><BsTelephone style={{ color: '#B00000'}} />
                  +2349067322844
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbarmain