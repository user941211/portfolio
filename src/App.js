import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Base from './Base';
//import Projects from './components/Projects';
//import Skills from './components/Skills';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './App.css'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Base />} />
      </Routes>
    </Router>
  );
}

export default App;
