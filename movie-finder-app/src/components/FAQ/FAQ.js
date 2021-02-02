import React from 'react';
import { Accordion, Card, Button} from 'react-bootstrap'
import './FAQ.css'

const FAQ = () => {
    return (
    <div className="accordionLandingPage"> 
    <h1> Frequently Asked Questions</h1>
        <Accordion className="accordion">
        <Card className="accordionCard">
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                What Is Movie Finder?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            Movie Finder is a service that offers a wide variety of finally finding the best Movies to watch. We got tired of always scrolling aimlessly through websites, blogs, streaming apps just to give up on a random movie that ended up being a waste of time. With Movie Finder, you'll enter your movie watching night prepared. You get the popcorn, we'll find the movie. 
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card className="accordionCard">
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Why Movie Finder!
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
            Movie Finder is a service that offers a wide variety of finally finding the best Movies to watch. We got tired of always scrolling aimlessly through websites, blogs, streaming apps just to give up on a random movie that ended up being a waste of time. With Movie Finder, you'll enter your movie watching night prepared. You get the popcorn, we'll find the movie. 
            </Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card className="accordionCard">
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
               How Do You Know What Movies to Watch?
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>
            Movie Finder is a service that offers a wide variety of finally finding the best Movies to watch. We got tired of always scrolling aimlessly through websites, blogs, streaming apps just to give up on a random movie that ended up being a waste of time. With Movie Finder, you'll enter your movie watching night prepared. You get the popcorn, we'll find the movie. 
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>
    </div>
    );
}

export default FAQ


