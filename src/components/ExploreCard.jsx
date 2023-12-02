import React, { useEffect } from 'react'
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, text }) => {

  return (
    <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      loading='lazy'
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="h-[75%] lg:h-[35%] justify-center lg:justify-end lg:pb-10 absolute bottom-0 flex w-full px-4 md:px-14 lg:px-8 flex-col bg-[rgba(0,0,0,0.55)] rounded-b-[24px]">
        <p className="font-normal text-[12px] sm:text-[16px] leading-[15px] sm:leading-[20.16px] text-white text-start">
          {text}
        </p>
        <h2 className="mt-[24px] leading-[25px] lg:leading-[35px] font-semibold sm:text-[32px] text-[22px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);}

export default ExploreCard