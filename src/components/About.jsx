import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md"

const About = () => {
    // Button hover state
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className='w-full p-6 md:p-20 bg-[#CDEA68] rounded-tl-2xl md:rounded-tl-3xl rounded-tr-2xl md:rounded-tr-3xl text-black relative z-[20]'>

                {/* Heading Text: Mobile par w-full aur readable size, Desktop par exact text-[3.5vw] */}
                <h1 className='font-neue text-[6.5vw] md:text-[3.5vw] leading-[7.5vw] md:leading-[4.4vw] tracking-tight w-full md:w-[85%]'>
                    We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
                </h1>

                {/* Flex Wrapper: Mobile par flex-col (vertical stack), Desktop par flex-row */}
                <div className='w-full flex flex-col md:flex-row gap-7 border-t-[1px] border-[#738146] mt-10 md:mt-20 pt-8 md:pt-10'>

                    {/* Left Content Column */}
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-4xl md:text-6xl font-neue'>How we can help:</h1>

                        {/* Button */}
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className='group px-6 md:px-10 py-4 md:py-6 bg-zinc-900 rounded-full text-white flex items-center gap-5 md:gap-8 mt-6 md:mt-10 uppercase font-neue hover:bg-black transition-colors duration-300 cursor-pointer'
                        >
                            <span>Read More</span>

                            {/* Dynamic Circle */}
                            <div className='w-2 h-2 group-hover:w-10 group-hover:h-10 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center transition-all duration-300 overflow-hidden'>
                                <MdArrowOutward className='opacity-0 group-hover:opacity-100 text-xl md:text-2xl transition-opacity duration-200 shrink-0' />
                            </div>
                        </button>
                    </div>

                    {/* Right Image Frame: Mobile par w-full aur h-[42vh], Desktop par exact w-1/2 aur h-[70vh] */}
                    <div className={`w-full md:w-1/2 h-[42vh] md:h-[70vh] mt-6 md:mt-0 rounded-2xl md:rounded-3xl overflow-hidden transition-transform duration-700 ease-out ${isHovered ? 'scale-95' : 'scale-100'}`}>
                        <img
                            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                            src="/Homepage-Photo-1326x939.jpg"
                            alt="Ochi Homepage"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default About