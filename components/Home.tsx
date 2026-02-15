import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;