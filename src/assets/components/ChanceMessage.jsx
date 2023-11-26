import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const messageVariants = {
  hidden: {opacity: 0, y: -20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
}

const ChanceMessage = () => {
  return (
    <div>ChanceMessage</div>
  )
}

export default ChanceMessage