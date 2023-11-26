import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const messageVariants = {
  hidden: {opacity: 0, y: -20},
  visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
}

const StyledMessageContainer = styled(motion.div)`
  margin-top: 1rem;
  text-align: center;
`

const ChanceMessage = ({show, isLoading}) => {
  return (
    <StyledMessageContainer
      variants = {messageVariants}
      initial = "hidden"
      animate = {show ? 'visible' : 'hidden'}
    >
      {isLoading ? <p>Loading...</p> : <p>Do I still have a chance?</p>}
    </StyledMessageContainer>
  )
}

export default ChanceMessage