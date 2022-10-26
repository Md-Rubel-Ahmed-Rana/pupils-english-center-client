import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false)
    const { handleSignInWithGoogle, setUser, signinWithGithub, signinWithFacebook, createUser, updateUserProfile } = useContext(AuthContext);

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullname.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const checkbox = form.checkbox.value;

        createUser(email, password)
        .then(() => {
            handleUpdateProfile(fullName, photoURL);
            navigate("/login")
        })
        .catch((error) => console.log(error))
    };


    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => alert("Profile update"))
        .catch((error) => console.log(error))
    }

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
                <Form onSubmit={handleRegistration} className='bg-light p-2'>
                    <h3 className='text-center'>Register here</h3>
                    <Form.Group className="mb-3" controlId="fullname">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="fullname" placeholder="Full Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photoURL" placeholder="PhotoURL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="checkbox">
                        <Form.Check onClick={() => setAccept(!accept)} type="checkbox" name="checkbox" label="Accept our terms and conditions." />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" disabled={!accept ? true : false } type="submit">
                            Register
                        </Button>
                        <p>Already have an account? <Link to="/login">Login</Link> </p>
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

export default Register;