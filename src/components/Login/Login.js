import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"

const Login = () => {
    return (
        <div className='form-container d-md-flex mx-auto gap-5 border mt-2 p-2'>
            <div>
                <Form className='bg-light p-2'>
                    <h3 className='text-center'>Login Please</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept our terms and conditions." />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
            <div className='mt-2 signin-buttons'>
                <div>
                    <Button variant="primary d-block">Signin with Google</Button>
                </div>
                <div>
                    <Button variant="primary d-block">Signin with Github</Button>
                </div>
               <div>
                    <Button variant="primary d-block">Signin with Facebook</Button>
               </div>
            </div>
        </div>
    );
};

export default Login;