import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StledButton = styled(motion.button)`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ isLoading }) => (isLoading ? '#3498db' : '#2980b9')};
  }
`

const ChanceButton = ({ onClick , isLoading }) => {
  return (
    <StyledButton
      whileHover = {{ scale: 1.1 }}
      whileTap = {{ scale: 0.9 }}
      onClick = {onClick}
      isLoading = {isLoading}
    >
      {isLoading ? 'Loading...' : 'Click me'}
    </StyledButton>
  )
}

export default ChanceButton