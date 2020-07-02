import React from 'react';
import Hero from '../components/Hero';
import { Container } from 'react-bootstrap';
import AboutPage from '../pages/AboutPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';


function HomePage(props) {

    return (
        <div>
        <Container className="animate__animated animate__fadeInUp">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </Container>
        <AboutPage title={props.AboutTitle} />
          <PortfolioPage title={props.PortfolioTitle} />
          <ContactPage title={props.ContactTitle} />
        </div>
    );
}

export default HomePage;