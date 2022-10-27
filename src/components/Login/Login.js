import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import "./Login.css";
import swal from 'sweetalert';

const Login = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname
    const { handleSignInWithGoogle, 
            setUser, 
            signinWithGithub, 
            signinWithFacebook,
            loginWithEmailAndPassword,
            resetPassword,
            dark
        } = useContext(AuthContext);

    

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                swal("Wow!", "Congratulations!", "success")
                navigate(from, { replace: true })
            })
            .catch((error) => {
                swal(`${error}`, "", "error")
            })
    };

    const handleGoogle = () => {
        handleSignInWithGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true })

        })
            .catch((error) => swal(`${error}`, "", "error"))
    }
    const handleGithub = () => {
        signinWithGithub()
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true })
        })
            .catch((error) => swal(`${error}`, "", "error"))
    }
    const handleFacebook = () => {
        signinWithFacebook()
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true })

        })
            .catch((error) => swal(`${error}`, "", "error"))
    }

    const getUserEmail = (event) => {
        const email = event.target.value;
        setEmail(email);
    }
    const handleResetPassword = () => {
        if (!email) {
            alert("Please enter your email.");
            return;
        }
        resetPassword(email)
            .then(() => swal("Don't worry", "We sent an reset-email to your email. Please check your inbox or spam box"))
            .then((error) => swal(`${error.message}`))
    }

    return (
        <div className={`conatainer-fluid p-md-4 ${dark ? "bg-light" : "bg-dark"}`}>
            <div className='form-container d-md-flex mx-auto gap-5 border p-2'>
                <div>
                    <Form onSubmit={handleLogin} className={`p-2 ${dark ? "bg-ligh" : "bg-dark text-white"}`}>
                        <h3 className='text-center'>Login Please</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={getUserEmail} type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        <Link onClick={handleResetPassword} className='text-decoration-none'>Forget Password?</Link>

                        <div className='text-center '>
                            <Button className='w-100 mt-2' variant="primary" type="submit">
                                Login
                            </Button>

                            <p className='mt-2'>Don't have an account? <Link to="/register">Register</Link> </p>
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
        </div>
    );
};

export default Login;