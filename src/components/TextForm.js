import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState('');
    const [toggle, setToggle] = useState(true);
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClickUP = () => {
        setToggle(!toggle);
        toggle ? setText(text.toUpperCase()) : setText(text.toLowerCase());
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

                <button className="btn btn-primary mx-1" onClick={handleClickUP}>
                    {toggle ? 'Convert to UpperCase' : 'Convert to LowerCase'}
                </button>
            </div>

            {/* text summary */}
            <div className="container mt-5">
                <h3>Your Text Summary</h3>
                <h4>
                    {text.split(' ').length} words and {text.trim().length} characters without space!!
                </h4>

                <h5>Your average time to read {(0.008 * text.trim().length).toFixed(2)} Minutes</h5>
            </div>
        </>
    );
};

export default TextForm;
