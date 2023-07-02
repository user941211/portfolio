import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path={`/`} element={<About />} />
        <Route path={`/projects`} element={<Projects />} />
        <Route path={`/contact`} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
