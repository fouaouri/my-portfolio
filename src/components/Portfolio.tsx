import { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Portfolio() {
  const [currentSection, setCurrentSection] = useState('hero');

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative">
        {currentSection === 'hero' && <Hero onNavigate={setCurrentSection} />}
        {currentSection === 'about' && <About onNavigate={setCurrentSection} />}
        {currentSection === 'skills' && <Skills onNavigate={setCurrentSection} />}
        {currentSection === 'projects' && <Projects onNavigate={setCurrentSection} />}
        {currentSection === 'contact' && <Contact onNavigate={setCurrentSection} />}
      </div>
    </div>
  );
}

export default Portfolio;
