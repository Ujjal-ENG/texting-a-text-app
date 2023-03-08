import React from 'react';

const TextAction = (props) => {
    return (
        <>
            <div className="container">
                <button className="btn btn-primary mx-1" onClick={props.handleClickUP}>
                    {props.toggle ? 'Convert to UpperCase' : 'Convert to LowerCase'}
                </button>

                <button className="btn btn-primary mx-1" onClick={props.handleClickSpaces}>
                    Remove Extra Spaces!!
                </button>
            </div>

            {/* text summary */}
            <div className="container mt-5">
                <h3>Your Text Summary</h3>
                <h4>
                    {props.text.split(' ').length} words and {props.text.trim().length} characters without space!!
                </h4>

                <h5>Your average time to read {(0.008 * props.text.trim().length).toFixed(2)} Minutes</h5>
            </div>
        </>
    );
};

export default TextAction;
