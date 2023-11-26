import React , { useState } from 'react'
import { ChanceButton , ChanceMessage , Loader } from './components'
import styled from 'styled-components';

const StyledAppContainer = styled.div`
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  background-color: #ecf0f1
`
const StyledCard = styled.div`
  max-width: 400px
  width: 100%
  padding: 20px
  background-color: #fff
  border-radius: 8px
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
`

const App = () => {
  const [showMessage , setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setShowMessage(true)
    }, 2000)
  }

  return (
    <StyledAppContainer>
      <StyledCard>
        <h1 style={{textAlign: 'center', fontSize: '1.5rem', marginBottom: '1rem'}}>
          Click Button
        </h1>
        <ChanceButton onClick={handleButtonClick} isLoading={isLoading} />
        {isLoading ? <Loader /> : <ChanceMessage show={showMessage} isLoading={isLoading} />}
      </StyledCard>
    </StyledAppContainer>
  )
}

export default App