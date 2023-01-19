import React, { useState } from 'react'
import Index from '../LanguageSelector'
import { ClicableText, Container } from './styles'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ClicableText onClick={() => setIsOpen(!isOpen)}>ENG</ClicableText>
      {isOpen && (
        <Container>
          <Index />
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Container>
      )}
    </>
  )
}

export default Index
