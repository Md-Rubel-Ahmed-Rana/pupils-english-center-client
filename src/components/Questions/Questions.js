import React from 'react';
import  ReactToPdf  from "react-to-pdf"
const ref = React.createRef();
const Questions = () => {
    return (
        <div>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div >
                <h2>Md Rubel Ahmed Rana</h2>
            </div>
        </div>
    );
};

export default Questions;