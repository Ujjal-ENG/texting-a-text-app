import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () => {
    return (
        <>
            <Navbar />
            <TextForm heading="Enter the text to analyze below" />
        </>
    );
};

export default App;
