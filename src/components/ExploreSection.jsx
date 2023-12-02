import React, { useState } from 'react'
import ExploreCard from './ExploreCard'
import { exploreCategories } from '../utils/constants'
import { motion } from 'framer-motion'
import { staggerContainer } from '../utils/motion'
import { TypingText } from './MotionComponents'

const ExploreSection = () => {

    const [active, setActive] = useState("category-3")

  return (
    <div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`2xl:max-w-[1280px] w-[90%] mx-auto flex flex-col pt-[30px]`}
              >
                <div className="mt-[60px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                  {exploreCategories.map((category, index) => (
                    <ExploreCard
                      key={category.id}
                      {...category}
                      index={index}
                      active={active}
                      handleClick={setActive}
                    />
                  ))}
                </div>
              </motion.div>
    </div>
  )
}

export default ExploreSection