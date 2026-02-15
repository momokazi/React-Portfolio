import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ChatWidget from './components/ChatWidget';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200 selection:bg-primary selection:text-white font-sans scroll-smooth transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <ChatWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;