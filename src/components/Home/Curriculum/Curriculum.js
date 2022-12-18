import React from 'react';
import "./Curriculum.css"

const Curriculum = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center'>Our Curriculum</h2>
            <div className='curriculum'>
                <div className='card bg-light p-2'>
                    <h3>Practise</h3>
                    <p>Our student always on practise. The main theory of our students' success is practise. We force them to practise regularly</p>
                </div>
                <div className='card bg-light p-2'>
                    <h3>Deep Thinking</h3>
                    <p>Thinking is the main key to find out something new. We teach our student how to think properly to find out logic.</p>
                </div>
                <div className='card bg-light p-2'>
                    <h3>Emotional Learning</h3>
                    <p>Emotion is the best way to learning and taking something without question. So, we some time teach our students with emotionally.</p>
                </div>
            </div>
        </div>
    );
};

export default Curriculum;