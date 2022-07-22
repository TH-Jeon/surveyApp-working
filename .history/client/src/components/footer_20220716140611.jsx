import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './foot.css';
function Foot() {
    return (
        <Navbar className="footer" fixed="bottom" bg="light" variant="dark" expand="lg">
        <Container className="justify-content-center">
             Copyright 2022 by group 5. All Rights Reserved.
        </Container>
      </Navbar>   
    
    )
};
    export default Foot;