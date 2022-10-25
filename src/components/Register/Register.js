import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='md:flex justify-between md:w-1/2 md:border-2 rounded mx-auto py-2 px-4 mt-2'>
            <div>
                <form className='bg-gray-200 px-2 py-10 border-2 rounded text-center'>
                    <h3 className='text-center font-bold text-xl mb-6'>Login Please</h3>
                    <div className='mb-6'>
                        <input type="email" name="email" id="email" placeholder='Your Email' className='px-2' />
                    </div>
                    <div className='mb-6'>
                        <input type="password" name="password" id="password" placeholder='Your Password' className='px-2' />
                    </div>
                    <p className='text-center mb-4'>
                        <button className='bg-blue-800 text-center py-1   px-20 rounded text-white' type="submit">Register</button>
                    </p>

                    <small>Already have an account? <Link to="/login" className='underline'>Login</Link> </small>
                </form>
            </div>
            <div className='md:border-l-2 md:pl-10 md:mt-1 mt-5'>
                <div>
                    <button className='bg-gray-300 border-2 rounded-md py-1 px-2 font-bold mb-4'>Signin with Google</button>
                </div>
                <div>
                    <button className='bg-gray-300 border-2 rounded-md py-1 px-2 font-bold mb-4'>Signin with Github</button>
                </div>
                <div>
                    <button className='bg-gray-300 border-2 rounded-md py-1 px-2 font-bold mb-4'>Signin with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Register;