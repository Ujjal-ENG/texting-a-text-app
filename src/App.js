import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { Routes, Route } from 'react-router-dom';

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
            <Routes>
                <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
