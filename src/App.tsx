import { useEffect, useState } from 'react'
import AboutMe from './components/AboutMe'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechnicalSkills from './components/TechnicalSkills'
import TopSkills from './components/TopSkills'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('john-ugbewi-theme');
    if (saved) return saved === 'dark';
    return (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('john-ugbewi-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('john-ugbewi-theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="d-grid gap-3 pb-5">
        <Hero />
        <TopSkills />
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6 ">
              <AboutMe />
            </div>
            <div className="col-md-6">
              <TechnicalSkills />
            </div>
          </div>
        </div>
        {/* <Projects /> */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

export default App
