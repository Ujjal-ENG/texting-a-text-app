import React, { useState } from 'react';
import TextAction from './TextAction';

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

    const handleClickSpaces = () => {
        setText(text.replace(/\s+/g, ' '));
    };

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center">{props.heading}</h1>
                <div className={`mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <label htmlFor="myBox" className="form-label">
                        Write your text here
                    </label>
                    <textarea
                        style={{ backgroundColor: `${props.mode === 'light' ? 'white' : 'gray'}`, color: `${props.mode === 'light' ? 'black' : 'white'}` }}
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleChange}></textarea>
                </div>
            </div>

            <TextAction text={text} handleChange={handleChange} handleClickUP={handleClickUP} handleClickSpaces={handleClickSpaces} toggle={toggle} />
        </>
    );
};

export default TextForm;
