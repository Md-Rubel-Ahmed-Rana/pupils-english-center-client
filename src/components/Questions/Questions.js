import React, { useContext } from 'react';
import { Accordion } from 'react-bootstrap'; 
import { AuthContext } from '../../contexts/UserContext';


const Questions = () => {
    const {dark} = useContext(AuthContext)
    return (
        <div className={`${dark ? "bg-dark text-white" : "bg-light"}`}>
            <div className="px-md-5 container py-4 mt-3">
                <Accordion className={`accordians ${dark ? "bg-dark text-white" : "bg-light"}`} defaultActiveKey="0">
                    <Accordion.Item className={`bg-light mb-4 ${dark ? "bg-dark text-white" : " bg-light"}`} eventKey="0">
                        <Accordion.Header className={` bg-dark ${dark ? "bg-dark text-white" : "bg-light"}`}>What is Pupils English Center?</Accordion.Header>
                        <Accordion.Body className={`accordians ${dark ? "bg-dark text-white" : "bg-light"}`}>
                            Pupils English Center is learning platform where you can learn varius topics like SPOKEN ENGLISH, BASIC COMPUTER, IELTS, GRAPHICS DESIGN, GRAMMAR & WRITING, PICU FOR IELTS.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={`accordians mb-4 ${dark ? "bg-dark text-white" : "bg-light"}`} eventKey="1">
                        <Accordion.Header className={` ${dark ? "bg-dark text-white" : "bg-light"}`}>What is the purpose of these courses?</Accordion.Header>
                        <Accordion.Body className={` ${dark ? "bg-dark text-white" : "bg-light"}`}>
                            You have already known that we provide many kinds of courses. So, Our purpose is clear that we want to teach digital topics the young genaration.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={` mb-4 ${dark ? "bg-dark text-white" : "bg-light"}`} eventKey="2">
                        <Accordion.Header>How do you continiue this center?</Accordion.Header>
                        <Accordion.Body>
                            Simply these courses are continiue paralally. Every course is continiues all time. After completing one course then starts another course. We take batch continiuesly after finishing a batch.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className={` ${dark ? "bg-dark text-white" : "bg-light"}`} eventKey="3">
                        <Accordion.Header>What is PICU for IELTS?</Accordion.Header>
                        <Accordion.Body>
                            PICU for Pupils Intensive Care Unit. This is a special course for those who have completed IELTS and they are facing problem when they try to talk fluently to others. We support those students.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Questions;