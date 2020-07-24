import React from 'react';
import Container from 'react-bootstrap/Container';

function Content(props) {

    return( 
        <Container > 
            <div className="row justify-content-center align-items-center">
                    {props.children}
            </div>
        </Container>
    )
}

export default Content;