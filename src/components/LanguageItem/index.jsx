import React from 'react'
import { LanguageText } from './styles'

const Index = ({ languages }) => {
  const handleClick = language => {
    console.log(`Language: ${language}`)
  }
  return (
    <ul>
      {languages.map((language, index) => (
        <li key={index}>
          <div onClick={() => handleClick(language)}>
            <LanguageText>{language}</LanguageText>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Index
