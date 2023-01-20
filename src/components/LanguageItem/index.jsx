import React from 'react'
import { LanguageText } from './styles'

const Index = ({ languages }) => {
  return (
    <ul>
      {languages.map((language, index) => (
        <LanguageText key={index}>{language}</LanguageText>
      ))}
    </ul>
  )
}

export default Index
