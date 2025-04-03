import { Suspense, lazy, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Contact />
      </Suspense>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;