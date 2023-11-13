import React from 'react'
import './style.css'
import Button from '../../common/Button'
import Iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import { motion } from 'framer-motion'

function MainComponent() {
  return (
    <div className='flex_main'>
      <div className='left'>
        <motion.h1 className='left_heading_white'
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >Track Crypto</motion.h1>

        <motion.h1 className='left_heading_color'
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >Real Time. </motion.h1>

        <motion.p className='left_heading_para'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >Track Crypro through a public api in real time . Visit the Dashboard to do so . </motion.p>
        <motion.div className='btn_main'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          <Button
            text={"Dashboard"}
          />
          <Button
            text={"Share"}
            outline={true}
          />
        </motion.div>
      </div>
      <div className='right'>
        <motion.img src={Iphone} alt="#" className='iphone'
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 1,
            repeat: Infinity
          }}
        />
        <img src={gradient} alt="#" className='gradient' />
      </div>
    </div>
  )
}

export default MainComponent