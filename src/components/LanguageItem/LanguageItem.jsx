import React from 'react'
import { LanguageText } from './styles'

function LanguageItem (props) {
  const languages = props.languages
  const listLanguages = languages.map((language) =>
    <LanguageText key={language}>{language}</LanguageText>
  )
  return (
    <ul>{listLanguages}</ul>
  )
}

export default LanguageItem
