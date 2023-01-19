import React from 'react'
import { TextContainer, LanguageImage, LanguageText } from './styles'

const LanguageItem = ({ image, text, onClick }) => {
  return (
    <TextContainer>
      <LanguageImage src={image} alt={text} />
      <LanguageText onClick={onClick}>{text}</LanguageText>
    </TextContainer>
  )
}

export default LanguageItem
