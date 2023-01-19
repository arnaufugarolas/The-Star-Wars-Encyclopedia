import React, { useState } from 'react'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { ClicableText } from './styles'

const LanguageButtonSelector = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <ClicableText onClick={() => setIsOpen(!isOpen)}>ENG</ClicableText>
      {isOpen && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <LanguageSelector />
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </>
  )
}

export default LanguageButtonSelector
