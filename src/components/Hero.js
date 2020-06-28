import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Imagehero from '../assets/images/heroImage.jpg'

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true} className="py-5">
                <div className='animate__fadeInDown d-flex justify-content-between align-items-center'>
                    <div>
                        <h1 className="h1 hero-title hero-welcome">Hi, I'm</h1>
                        {props.title && <h1 className="h1 hero-title hero-name">{props.title}</h1>}
                        {props.subTitle && <h3 className="hero-h3"><span className="proff-span">Front-End </span>{props.subTitle}</h3>}
                        {props.text && <h5 className="h5 font-weight-light">{props.text}</h5>}
                    </div>
                    <div className='hero-img'>
                        <img className='w-100' src={Imagehero} alt={Imagehero} />
                    </div>
                </div>
            </Container>
        </Jumbotron>
    );
}

export default Hero;