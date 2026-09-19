import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Trigonometry: Distance -> Angle in Degrees
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='eyes relative w-full h-[60vh] md:h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='w-full h-full'>
        <img
          className='w-full h-full object-cover'
          src="/eyes back img.jpg"
          alt="Eyes Background"
        />
      </div>

      {/* Centered Eyes Container */}
      <div className='absolute flex gap-5 md:gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>

        {/* Left Eye */}
        <div className='w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
          <div className='w-[55%] h-[55%] rounded-full bg-[#212121] relative flex items-center justify-center'>
            {/* Center Text */}
            <span className='uppercase text-zinc-100 text-[3vw] md:text-[1.2vw] font-medium z-10 pointer-events-none'>
              Play
            </span>

            {/* Rotating Line Wrapper */}
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className='line absolute top-1/2 left-1/2 w-full h-3 md:h-5'
            >
              <div className='w-3 h-3 md:w-5 md:h-5 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className='w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
          <div className='w-[55%] h-[55%] rounded-full bg-[#212121] relative flex items-center justify-center'>
            {/* Center Text */}
            <span className='uppercase text-zinc-100 text-[3vw] md:text-[1.2vw] font-medium z-10 pointer-events-none'>
              Play
            </span>

            {/* Rotating Line Wrapper */}
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className='line absolute top-1/2 left-1/2 w-full h-3 md:h-5'
            >
              <div className='w-3 h-3 md:w-5 md:h-5 rounded-full bg-zinc-100'></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Eyes