import React from 'react';

import html_css_js from './html_css_js.png';
import react_logo from './react.png';
import mysql from './mysql.png';
import node_js from './Node_js.svg';

const About = () => {

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">기술 스택</h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-400 h-400 overflow-hidden rounded-lg mx-4 my-4">
                    <img src={html_css_js} alt="Profile" style={{ width: '400px', height: '400px' }} />
                </div>
                <div className="w-400 h-400 overflow-hidden rounded-lg mx-4 my-4">
                    <img src={react_logo} alt="Profile" style={{ width: '400px', height: '400px' }} />
                </div>
                <div className="w-400 h-400 overflow-hidden rounded-lg mx-4 my-4">
                    <img src={mysql} alt="Profile" style={{ width: '400px', height: '400px' }} />
                </div>
                <div className="w-400 h-400 overflow-hidden rounded-lg mx-4 my-4">
                    <img src={node_js} alt="Profile" style={{ width: '400px', height: '400px' }} />
                </div>
            </div>
        </div> 
    );
};

export default About;