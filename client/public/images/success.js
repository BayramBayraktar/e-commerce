import React from 'react';
import { motion } from 'framer-motion'

export const SuccessSVG = ({ setActiveMenu }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
  }}>
    <svg version="1.1" id="Capa_1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">
      <motion.circle
        style={{
          fill: '#25AE88'
        }}
        cx="25" cy="25" r="25"
        animate={{ scale: [1.5, 1, 1.5], rotateZ: [0, 360] }}
        transition={{
          times: [0, 1],
          duration: 5,
          repeat: Infinity,
          type: 'keyframes',
          ease: 'easeInOut'
        }}
      />
      <motion.polyline
        style={{
          fill: 'none',
          stroke: '#FFFFFF',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        animate={{ scale: [1, 0.8, 1], rotateZ: [0, 360] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          type: 'keyframes',
          ease: 'easeInOut'
        }}
        points="38,15 22,33 12,25"
      />
    </svg>

    <p
      style={{
        color: '#25AE88',
        fontSize: '22px'
      }}
    >Success payment</p>
    <button style={{
      backgroundColor: 'transparent',
      border: 'solid 1px #25AE88',
      padding: '10px',
      borderRadius: '25px',
      color: '#25AE88',
      cursor: 'pointer'

    }}
      onClick={() => setActiveMenu('main')}
    >Go back !</button>

  </div>

);
