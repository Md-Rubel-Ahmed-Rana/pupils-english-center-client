import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-2 text-center'>
            <div className='row'>
                <div className='col-lg-5 bg-light m-2 p-2'>
                    <h5>What is cors?</h5>
                    <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                </div>
                <div className='col-lg-5 bg-light p-2 m-2'>
                    <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 m-2 p-2 bg-light'>
                    <h5>How does the private route work?</h5>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div className='col-lg-5 bg-light m-2 p-2'>
                    <h5>What is Node? How does Node work?</h5>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;