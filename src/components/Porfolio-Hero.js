import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PortfolioHero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.PortfolioTitle && <h1 className="h1 hero-title">{props.PortfolioTitle}</h1>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default PortfolioHero;