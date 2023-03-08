import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('Enter text here');
    const handleChange = (e) => {
        setText(e.target.value);
    };

    let buttonClicked = true;
    const handleClickUP = () => {
        if (buttonClicked) {
            setText(text.toUpperCase());
            buttonClicked = false;
        } else {
            setText(text.toLowerCase());
            // buttonClicked = true;
        }
    };
    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        Write your text here
                    </label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClickUP}>
                    {'Convert to UpperCase'}
                </button>
            </div>

            {/* text summary */}
            <div className="container mt-5">
                <h3>Your Text Summary</h3>
                <h4>
                    {text.split(' ').length} words and {text.trim().length} characters without space!!
                </h4>
            </div>
        </>
    );
};

export default TextForm;
