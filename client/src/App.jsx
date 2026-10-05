import OrbitBackground from './components/OrbitBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <OrbitBackground />
      <div className="main-content-wrapper">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
