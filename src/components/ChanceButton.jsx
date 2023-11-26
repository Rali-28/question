import React from 'react'
import styled , { css } from 'styled-components'
import { motion } from 'framer-motion'
import Loader from './Loader'

const Styles = css`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2980b9;
  }
`

const StyledButton = styled(motion.button)`
  ${Styles};
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
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