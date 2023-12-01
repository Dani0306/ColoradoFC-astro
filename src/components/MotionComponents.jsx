import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, staggerContainer, textVariant2, fadeIn, slideIn } from '../utils/motion'

export const TypingText = ({ title, styles = "", reduced=false }) => {
  
  return (


    <motion.div   
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
            <motion.p
            variants={textContainer}
            className={`${reduced ? "text-[20px] lg:text-[30px] my-[5px]" : "text-[28px] lg:text-[60px] xl:text-[70px]"} text-secondary-white font-normal ${styles}`}
            >
            {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
            ))}
            </motion.p>
    </motion.div>
  )
}


export const MotionImage = ({ img, styles, direction = "right" }) => {
  return  <motion.div   
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }} className='flex items-center justify-center rounded-xl'>
    <motion.img variants={slideIn(direction, "tween", 0.2, 1)} src={img} className={`${styles} rounded-xl`} alt="imagen"/>
</motion.div>
}


export const MotionP = ({ content, styles }) => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}  className='flex items-center justify-center'>
      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className={`${styles}`}>
          {content}
      </motion.p>
    </motion.div>
  )
}


export const MotionDiv = ({ children, styles }) => {
  return (
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}  className='w-full flex items-center justify-center'>
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className={`${styles}`}>
        {children}
      </motion.div>
    </motion.div>
  )
}