import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import "./Login.css"

const Login = () => {
    const navigate = useNavigate()
    const { handleSignInWithGoogle, setUser, signinWithGithub, signinWithFacebook, loginWithEmailAndPassword } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                navigate("/checkout")
            })
            .catch((error) => console.log(error))
    };

    const handleGoogle = () => {
        handleSignInWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error) => console.log(error))
    }
    const handleGithub = () => {
        signinWithGithub()
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error) => console.log(error))
    }
    const handleFacebook = () => {
        signinWithFacebook()
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className='form-container d-md-flex mx-auto gap-5 border mt-2 p-2'>
            <div>
                <Form onSubmit={handleLogin} className='bg-light p-2'>
                    <h3 className='text-center'>Login Please</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <div className='text-center '>
                        <Button className='w-100' variant="primary" type="submit">
                            Login
                        </Button>

                        <p>Don't have an account? <Link to="/register">Register</Link> </p>
                    </div>
                </Form>
            </div>
            <div className='mt-2 signin-buttons'>
                <div className='mx-auto'>
                    <Button onClick={handleGoogle} variant="light d-block border">Signin with Google</Button>
                </div>
                <div className='mx-auto'>
                    <Button onClick={handleGithub} variant="light d-block border">Signin with Github</Button>
                </div>
                <div className='mx-auto'>
                    <Button onClick={handleFacebook} variant="light d-block border">Signin with Facebook</Button>
               </div>
            </div>
        </div>
    );
};

export default Login;