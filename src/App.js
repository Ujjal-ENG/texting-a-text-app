import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    };
    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <TextForm heading="Enter the text to analyze below" />
            <About />
        </>
    );
};

export default App;
