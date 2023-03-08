import React from 'react';

const TextForm = (props) => {
    return (
        <div className="container mt-4">
            <h1 className="text-center">{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">
                    Write your text here
                </label>
                <textarea className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert to UpperCase</button>
        </div>
    );
};

export default TextForm;
