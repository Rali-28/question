import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Button = styled(motion.button)
`
  @apply px-4 py-2 text-white rounded cursor-pointer

  ${({ isLoading }) => isLoading && '@apply bg-gray-400 cursor-not-allowed'}
`

const ChanceButton = ({ onClick , isLoading }) => {
  return (
    <div>ChanceButton</div>
  )
}

export default ChanceButton