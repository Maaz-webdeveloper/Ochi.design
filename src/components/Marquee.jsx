import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
    return (
        <div className='w-full py-14 md:py-20 rounded-tl-2xl md:rounded-tl-3xl rounded-tr-2xl md:rounded-tr-3xl bg-[#004D43] text-white relative z-[10]'>
            <div className='text border-t-2 border-b-2 border-zinc-400 flex items-center whitespace-nowrap overflow-hidden'>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className='text-[28vw] leading-none font-founders font-semibold uppercase -mt-[4vw] md:-mt-[3vw] -mb-[2vw] md:-mb-[1vw] pr-10 md:pr-20 shrink-0'>
                    We are ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                    className='text-[28vw] leading-none font-founders font-semibold uppercase -mt-[4vw] md:-mt-[3vw] -mb-[2vw] md:-mb-[1vw] pr-10 md:pr-20 shrink-0'>
                    We are ochi
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee