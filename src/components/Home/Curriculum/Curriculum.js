import React from 'react';
import "./Curriculum.css"

const Curriculum = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center'>Our Curriculum</h2>
            <div className='curriculum'>
                <div className='card bg-light p-2'>
                    <h3>Practices</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card bg-light p-2'>
                    <h3>Deep Thinking</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card bg-light p-2'>
                    <h3>Social-Emotional Learning</h3>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;