import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullname.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.value;
    }
    return (
        <div className='form-container d-md-flex mx-auto gap-5 border mt-2 p-2'>
            <div>
                <Form onSubmit={handleRegistration} className='bg-light p-2'>
                    <h3 className='text-center'>Register here</h3>
                    <Form.Group className="mb-3" controlId="fullname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="fullname" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="PhotoURL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="checkbox">
                        <Form.Check type="checkbox" name="checkbox" label="Accept our terms and conditions." />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <p>Already have an account? <Link to="/login">Login</Link> </p>
                    </div>
                </Form>
            </div>
            <div className='mt-2 signin-buttons'>
                <div className='mx-auto'>
                    <Button variant="light d-block border">Signin with Google</Button>
                </div>
                <div className='mx-auto'>
                    <Button variant="light d-block border">Signin with Github</Button>
                </div>
                <div className='mx-auto'>
                    <Button variant="light d-block border">Signin with Facebook</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;