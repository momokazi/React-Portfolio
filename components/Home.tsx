import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import CallToAction from './CallToAction';
import { Ticker } from './ui/Ticker';
import { TICKER_ITEMS } from '../constants';

const Home: React.FC = () => (
  <>
    <Hero />
    <Ticker items={TICKER_ITEMS} />
    <Projects />
    <Skills />
    <About />
    <Ticker
      items={['Available for work', 'Flutter', 'Node.js', 'Say hello']}
      tone="bg-acid text-ink"
      direction="right"
      speed={40}
    />
    <CallToAction />
  </>
);

export default Home;
