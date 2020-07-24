import React from 'react';
import Container from 'react-bootstrap/Container';
import FooterSocials from './Footer-Socials';

const footerLogodot = {
    color: "#FF105E",
    fontSize: '30px'
}
const footerlogo = {
    color: '#ffffff',
    fontSize: 25
}

function Footer() {

    return (
        <footer className="mt-5 pb-5">
            <Container fluid={true}>

                <Container className="footer-container d-flex justify-content-center align-items-center flex-column pt-5 pb-5" >
                    <p className="main-logo footer-logo" style={footerlogo}>NTCH<span className="logo-span footer-logo-span" style={footerLogodot}>.</span>GE</p>
                    <FooterSocials />
                </Container>
                <Container className="d-flex justify-content-center">
                    <a href="mailto:nikolozchavchanidze@gmail.com" className="hire-btn">Hire Me</a>
                </Container>
                <Container className="d-flex justify-content-center pt-5">
                    <p>&copy; 2020 NTCH.GE All rights reserved. </p>
                </Container>
            </Container>
        </footer>
    )
}

export default Footer;