import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutHero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={9} sm={12}>
                        {props.title && <h1 className="h1 about-hero-title title-ba text-center">{props.title}</h1>}
                        {props.subTitle && <h3 className="hero-h3">{props.subTitle}</h3>}
                        {props.text && <h5 className="h5 font-weight-light">{props.text}</h5>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default AboutHero;