import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Ready from './components/Ready'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    // overflow-x-clip browser scroll container ko break kiye bina horizontal overflow rokti hai
    <div className='w-full max-w-full overflow-x-clip relative'>
      <Navbar />

      {/* ===== STACKING WRAPPER ===== */}
      <div className='relative w-full'>

        {/* 1. Landing Page (Sticky layer 0) */}
        <div className='sticky top-0 w-full h-screen z-0'>
          <LandingPage />
        </div>

        {/* 2. Marquee (Slides over Landing) */}
        <Marquee />

        {/* 3. About (Slides over Marquee) */}
        <About />

      </div>
      {/* ===== WRAPPER ENDS HERE ===== */}

      {/* Normal Flow Sections */}
      <Eyes />
      <Featured />
      <Cards />
      <Ready />
      <Footer />

    </div>
  )
}

export default App