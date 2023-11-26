import React from 'react'
import styled from 'styled-components';
import { waveform } from 'ldrs'

waveform.register()

const StyledLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  margin-top: 1rem;
`

const Loader = ({ size, color }) => {
  return (
    <StyledLoaderContainer size={size}>
      <l-waveform
        size={size}
        stroke="3.5"
        speed="1" 
        color={color} 
      />
    </StyledLoaderContainer>
    )
}

export default Loader