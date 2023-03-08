import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    };
    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <TextForm heading="Enter the text to analyze below" mode={mode} />
            <About />
        </>
    );
};

export default App;
