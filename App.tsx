import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ChatWidget from './components/ChatWidget';
import { ThemeProvider } from './context/ThemeContext';

/** Route changes should land at the top of the new page, not mid-scroll. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-paper font-sans text-ink">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border-3 focus:border-ink focus:bg-acid focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
