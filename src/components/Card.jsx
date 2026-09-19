import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, image, buttons, isLeft }) => {
    // Har single card ki apni local hover state
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="cardcontainer relative w-full md:w-[calc(50%-20px)] mb-8 md:mb-0"
        >
            {/* Title & Small Dot (Dark Color Fixed) */}
            <div className='flex items-center gap-2 mb-4 uppercase text-sm font-light tracking-wide text-zinc-900'>
                <div className='w-2 h-2 rounded-full bg-zinc-900'></div>
                <span>{title}</span>
            </div>

            {/* Center Floating Text */}
            <h1 className={`absolute flex overflow-hidden z-[9] text-5xl md:text-8xl font-neue leading-none tracking-tight top-1/2 -translate-y-1/2 text-[#CDEA68] uppercase font-semibold pointer-events-none ${isLeft ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'
                }`}>
                {title.split('').map((item, index) => (
                    <motion.span
                        key={index}
                        initial={{ y: "100%" }}
                        animate={isHovering ? { y: "0" } : { y: "100%" }}
                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                        className='inline-block'
                    >
                        {item}
                    </motion.span>
                ))}
            </h1>

            {/* Image Frame */}
            <div className={`card w-full h-[40vh] md:h-[75vh] rounded-xl overflow-hidden transition-transform duration-700 ease-out ${isHovering ? 'scale-95' : 'scale-100'}`}>
                <img
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovering ? 'scale-110' : 'scale-100'}`}
                    src={image}
                    alt={title}
                />
            </div>

            {/* Dynamic Buttons Loop */}
            <div className="buttons flex gap-2 md:gap-3 mt-4 flex-wrap">
                {buttons.map((btnText, index) => (
                    <button
                        key={index}
                        className="px-3 md:px-4 py-1.5 md:py-2 font-neue border-[1px] border-zinc-800 text-zinc-900 rounded-full text-[11px] md:text-xs font-light uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                        {btnText}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Card