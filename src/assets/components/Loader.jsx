import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1)
    border-top: 4px solid #3498db
    border-radius 50%
    width: 20px
    height: 20px
    animation: spin 1s linear inifinite;

    @keyframes spin {
        0% {transform: rotate(0deg)}
        100% {transfor: rotate(360deg)}
    }
`

const Loader = () => {
  return (
    <StyledLoader />
  )
}

export default Loader