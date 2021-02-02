import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {
    return (

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MovieFinder</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#movies">Find Movies</Nav.Link>
        <Nav.Link href="#savedmovies">Most Watched</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search For Movies</Button>
        </Form>
    </Navbar>

    );
}

export default Navigation


