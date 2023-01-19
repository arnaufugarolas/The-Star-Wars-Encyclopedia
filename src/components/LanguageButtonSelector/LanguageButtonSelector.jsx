import React, { useState } from 'react'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { ClicableText, Container } from './styles'

const LanguageButtonSelector = () => {
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

export default LanguageButtonSelector
