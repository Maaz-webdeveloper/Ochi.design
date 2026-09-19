import React, { useState, useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md"

const Ready = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full min-h-screen md:h-screen bg-[#CDEA68] flex flex-col sticky top-0 items-center justify-center py-10 md:py-0 overflow-hidden z-0">

      {/* ================= 1. DESKTOP VIEW (100% Aapka Original Code) ================= */}
      <div className='hidden md:flex flex-col items-center justify-center text-[#212121] tracking-normal uppercase text-center leading-[0.85] text-[13vw] font-founders relative z-[1] select-none'>
        <h1>Ready</h1>
        <h1>To Start</h1>
        <h1>The Project?</h1>

        {/* Desktop Eyes Overlay (Center Overlay) */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] flex gap-8 pointer-events-none'>
          <div className='w-[14vw] h-[14vw] rounded-full bg-white flex items-center justify-center shadow-md'>
            <div className='w-[8.5vw] h-[8.5vw] rounded-full bg-[#212121] relative flex items-center justify-center'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 w-full h-8 flex items-center justify-start px-2'
              >
                <div className='w-[1.4vw] h-[1.4vw] rounded-full bg-white'></div>
              </div>
            </div>
          </div>

          <div className='w-[14vw] h-[14vw] rounded-full bg-white flex items-center justify-center shadow-md'>
            <div className='w-[8.5vw] h-[8.5vw] rounded-full bg-[#212121] relative flex items-center justify-center'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 w-full h-8 flex items-center justify-start px-2'
              >
                <div className='w-[1.4vw] h-[1.4vw] rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. MOBILE VIEW (Exact Match with Picture) ================= */}
      <div className='flex md:hidden flex-col items-center justify-center relative w-full'>
        {/* Mobile Heading (4 Lines) */}
        <div className='flex flex-col items-center justify-center text-[#212121] tracking-normal uppercase text-center leading-[0.9] text-[16vw] font-founders z-[1] select-none'>
          <h1>Ready</h1>
          <h1>To Start</h1>
          <h1>The</h1>
          <h1>Project?</h1>
        </div>

        {/* Mobile Eyes (Stacked Below Text) */}
        <div className='my-6 flex gap-4 pointer-events-none z-[2]'>
          <div className='w-[28vw] h-[28vw] rounded-full bg-white flex items-center justify-center shadow-md'>
            <div className='w-[16vw] h-[16vw] rounded-full bg-[#212121] relative flex items-center justify-center'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 w-full h-8 flex items-center justify-start px-1.5'
              >
                <div className='w-[3vw] h-[3vw] rounded-full bg-white'></div>
              </div>
            </div>
          </div>

          <div className='w-[28vw] h-[28vw] rounded-full bg-white flex items-center justify-center shadow-md'>
            <div className='w-[16vw] h-[16vw] rounded-full bg-[#212121] relative flex items-center justify-center'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='line absolute top-1/2 left-1/2 w-full h-8 flex items-center justify-start px-1.5'
              >
                <div className='w-[3vw] h-[3vw] rounded-full bg-white'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. BOTTOM BUTTONS ================= */}
      <div className='flex flex-col items-center gap-3 mt-2 md:mt-6 z-[3] font-founders'>
        <button className='group px-6 py-3 bg-[#212121] text-white rounded-full flex items-center gap-8 uppercase font-light text-xs md:text-sm tracking-wider border border-[#212121] hover:bg-black transition-colors duration-300 cursor-pointer font-neue'>
          <span>Start the Project</span>
          <div className='w-2 h-2 group-hover:w-7 group-hover:h-7 rounded-full bg-white text-[#212121] flex items-center justify-center transition-all duration-300 overflow-hidden'>
            <MdArrowOutward className='opacity-0 group-hover:opacity-100 text-base md:text-lg transition-opacity duration-200 shrink-0' />
          </div>
        </button>

        <span className='text-[10px] md:text-xs font-neue uppercase font-medium tracking-widest text-[#212121]'>OR</span>

        <button className='group px-6 py-3 border-[1px] border-[#212121] text-[#212121] rounded-full flex items-center gap-8 uppercase font-light text-xs md:text-sm tracking-wider hover:bg-[#212121] hover:text-white transition-colors duration-300 cursor-pointer font-neue'>
          <span>Hello@ochi.design</span>
          <div className='w-2 h-2 group-hover:w-7 group-hover:h-7 rounded-full bg-[#212121] group-hover:bg-white text-[#212121] flex items-center justify-center transition-all duration-300 overflow-hidden'>
            <MdArrowOutward className='opacity-0 group-hover:opacity-100 text-base md:text-lg transition-opacity duration-200 shrink-0' />
          </div>
        </button>
      </div>

    </div>
  )
}

export default Ready