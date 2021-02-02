import React from 'react';
import { Button, Form} from 'react-bootstrap'


const SignUpForm = () => {
    return ( 
    <Form>
        <div className="SignupForm"> 
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Email Address" id="submitEmailForm"/>
                <Button variant="primary" type="submit" id="submitEmailButton">
                Submit
                </Button>
            </Form.Group>
        </div>
    </Form>
)
}

export default SignUpForm;