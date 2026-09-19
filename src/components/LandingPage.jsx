import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion'

const LandingPage = () => {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-0.3"
            className='w-full min-h-screen md:h-screen pt-1 flex flex-col justify-between'
        >
            {/* Heading Section */}
            <div className="textstructure mt-28 md:mt-40 px-5 md:px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (
                                    /* Image Wrapper: Mobile par w-[15vw], Desktop par exact w-[8vw] */
                                    <div className='mr-[1.5vw] md:mr-[1vw] w-[15vw] md:w-[8vw] h-[10vw] md:h-[5.4vw] mt-1 md:mt-3 mb-[0.5vw] md:mb-0 relative overflow-hidden shrink-0'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                            className='w-full h-full rounded-md overflow-hidden'
                                        >
                                            <img className='w-full h-full object-cover' src="/content-image01.jpg" alt="Hero" />
                                        </motion.div>
                                    </div>
                                )}
                                {/* Font: Mobile par text-[15vw], Desktop par aapka original text-[9vw] */}
                                <h1 className='uppercase leading-[12.5vw] md:leading-[7vw] font-medium text-[15vw] md:text-[9vw] font-founders'>
                                    {item}
                                </h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Bottom Bar Section */}
            <div className='border-t-[1px] border-zinc-800 mt-10 md:mt-25 flex flex-col md:flex-row items-start md:items-center justify-between py-5 px-5 md:px-20 gap-5 md:gap-0 mb-5 md:mb-0'>
                {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index) => {
                    return <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
                })}
                <div className='start flex items-center gap-4'>
                    <div className='px-5 py-2 border-[1px] border-zinc-700 rounded-full font-light text-sm text-[#212121] uppercase tracking-wider flex items-center gap-5 cursor-pointer hover:bg-black hover:text-white transition-colors duration-300'>
                        <span>Start the Project</span>
                    </div>
                    <div className='w-9 h-9 flex rounded-full border-[2px] hover:bg-black hover:text-white transition-colors duration-300 font-bold border-zinc-500 items-center justify-center'><MdArrowOutward /></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage