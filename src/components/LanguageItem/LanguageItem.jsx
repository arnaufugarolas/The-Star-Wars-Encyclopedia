import React from 'react'
import { TextContainer, LanguageImage, LanguageText } from './styles'

const LanguageItem = ({ src, text }) => {
  return (
    <TextContainer style={{ display: 'flex', alignItems: 'center' }}>
      <LanguageImage src={src} alt={text} style={{ flexShrink: '0', maxHeight: '100%' }} />
      <LanguageText>{text}</LanguageText>
    </TextContainer>
  )
}

export default LanguageItem
