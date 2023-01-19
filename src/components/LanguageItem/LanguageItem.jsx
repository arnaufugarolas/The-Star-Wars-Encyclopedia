import React from 'react'
import { LanguageText } from './styles'

const LanguageItem = ({ languages }) => {
  return (
    <ul>
      {languages.map((language, index) => (
        <LanguageText key={index}>{language}</LanguageText>
      ))}
    </ul>
  )
}

export default LanguageItem
