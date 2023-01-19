import React, { useState } from 'react'
import LanguageSelector from '../LanguageSelector'
import { ClicableText, Container } from './styles'

const Index = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ClicableText onClick={() => setIsOpen(!isOpen)}>ENG</ClicableText>
      {isOpen && (
        <Container>
          <LanguageSelector />
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Container>
      )}
    </>
  )
}

export default Index
