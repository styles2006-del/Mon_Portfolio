import { useState, useEffect } from 'react';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Skills } from './components/portfolio/Skills';
import { Projects } from './components/portfolio/Projects';
import { Contact } from './components/portfolio/Contact';
import { Navigation } from './components/portfolio/Navigation';
import { Footer } from './components/portfolio/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavigate={scrollToSection}
      />
      
      <main>
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
