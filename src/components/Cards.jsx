import React from 'react'

const Cards = () => {
    return (
        <div className='w-full min-h-screen md:h-screen bg-zinc-100 flex flex-col md:flex-row items-center justify-center px-5 md:px-14 py-10 md:py-0 gap-5'>

            {/* 1. Green Ochi Card (Mobile par Full Width, 1-Column) */}
            <div className='cardcontainer h-[35vh] md:h-[54vh] w-full md:w-1/2'>
                <div className='card relative w-full h-full rounded-2xl bg-[#004D43] flex items-center justify-center'>
                    <h1 className='text-5xl md:text-7xl font-bold text-[#CDEA68] tracking-wide font-neue'>
                        ochi
                    </h1>
                    <button className='absolute left-5 md:left-8 bottom-5 md:bottom-8 px-4 py-1 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full text-xs tracking-wider font-neue hover:bg-[#CDEA68] hover:text-[#004D43] transition-colors duration-300 cursor-pointer'>
                        &copy;2019&ndash;2025
                    </button>
                </div>
            </div>

            {/* Right Side Cards Wrapper (Mobile par Strict Vertical Column) */}
            <div className='cardcontainer flex flex-col md:flex-row gap-5 h-auto md:h-[54vh] w-full md:w-1/2'>

                {/* 2. Clutch Card (Mobile par Full Width) */}
                <div className='card relative w-full md:w-1/2 h-[35vh] md:h-full rounded-2xl bg-[#212121] flex items-center justify-center'>
                    <div className='flex flex-col items-center gap-2'>
                        <h1 className='text-4xl md:text-5xl font-semibold text-white tracking-wider font-neue'>
                            Clutch
                        </h1>
                        <div className='flex text-[#CDEA68] text-base md:text-lg gap-1'>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                    </div>
                    <button className='font-neue absolute left-5 md:left-6 bottom-5 md:bottom-8 px-3 py-1 border-[1px] border-zinc-100 text-white rounded-full text-[12px] md:text-[14px] tracking-wider uppercase whitespace-nowrap hover:bg-white hover:text-[#212121] transition-colors duration-300 cursor-pointer'>
                        Rating 5.0 on Clutch
                    </button>
                </div>

                {/* 3. Futur Academy Card (Mobile par Full Width) */}
                <div className='card relative w-full md:w-1/2 h-[35vh] md:h-full rounded-2xl bg-[#212121] flex items-center justify-center'>
                    <div className='w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-white/60 flex items-center justify-center text-[9px] md:text-[10px] text-center uppercase p-2 font-bold tracking-widest text-white leading-tight font-neue'>
                        The Futur Academy
                    </div>
                    <button className='absolute left-5 md:left-6 bottom-5 md:bottom-8 px-3 py-1 border-[1px] font-neue border-zinc-100 text-white rounded-full text-[12px] md:text-[14px] tracking-wider uppercase whitespace-nowrap hover:bg-white hover:text-[#212121] transition-colors duration-300 cursor-pointer'>
                        Business Bootcamp Alumni
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Cards