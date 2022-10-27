import React from 'react';
import { Accordion } from 'react-bootstrap';


const Questions = () => {
    return (
        <div className='px-md-5 container mt-3'>
            <Accordion className='accordians' defaultActiveKey="0">
                <Accordion.Item className='bg-light mb-4' eventKey="0">
                    <Accordion.Header>What is Pupils English Center?</Accordion.Header>
                    <Accordion.Body>
                        Pupils English Center is learning platform where you can learn varius topics like SPOKEN ENGLISH, BASIC COMPUTER, IELTS, GRAPHICS DESIGN, GRAMMAR & WRITING, PICU FOR IELTS.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='bg-light' eventKey="1">
                    <Accordion.Header>What is the purpose of these courses?</Accordion.Header>
                    <Accordion.Body>
                        You have already known that we provide many kinds of courses. So, Our purpose is clear that we want to teach digital topics the young genaration.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='bg-light' eventKey="2">
                    <Accordion.Header>How do you continiue this center?</Accordion.Header>
                    <Accordion.Body>
                       Simply these courses are continiue paralally. Every course is continiues all time. After completing one course then starts another course. We take batch continiuesly after finishing a batch. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='bg-light' eventKey="3">
                    <Accordion.Header>What is PICU for IELTS?</Accordion.Header>
                    <Accordion.Body>
                        PICU for Pupils Intensive Care Unit. This is a special course for those who have completed IELTS and they are facing problem when they try to talk fluently to others. We support those students.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Questions;