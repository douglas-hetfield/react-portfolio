import { useState } from 'react'
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Footer from './components/Footer';

import Hello from './pages/Hello';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const { t, i18n } = useTranslation();
  
  return (
    <>
      <div className='bg-[#313131] text-white'>
        <Header />

        <div id='line-red' className='w-[5px] bg-[#CA3E47]  h-full absolute shadow-[1px_0px_9px_3px_rgba(202,62,71,0.5)]'></div>

        <div id='body' className=''>
          <Hello />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
