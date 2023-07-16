import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

const Base = () => {
  const handleButtonClick = (moduleId) => {
    const moduleRef = document.getElementById(`module-${moduleId}`);
    if (moduleRef) {
      moduleRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <Header onButtonClick={handleButtonClick} />
        <div id="module-1" className="baseBackGroundImage" style={{ height: '500px' }}>
            <div style={{ height: '158px' }}></div>
            <p className="baseP">- 변재성 -</p>
            <p className="baseP">웹 개발자 포트폴리오</p>
            
        </div>
        <div id="module-2">
            <About />
        </div>
        <div id="module-3">
            <Skills />
        </div>
        <div id="module-4">
            <Projects />
        </div>
    </div>
  );
};

export default Base;