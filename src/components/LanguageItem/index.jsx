import React from 'react'
import { Link } from 'react-router-dom'
import { LanguageText } from './styles'

const languageCodes = {
  wo: 'Wookiee',
  bg: 'Bulgarian',
  cs: 'Czech',
  da: 'Danish',
  de: 'German',
  el: 'Greek',
  es: 'Spanish',
  et: 'Estonian',
  fi: 'Finnish',
  fr: 'French',
  hu: 'Hungarian',
  id: 'Indonesian',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  lt: 'Lithuanian',
  lv: 'Latvian',
  nb: 'Norwegian',
  nl: 'Dutch',
  pl: 'Polish',
  br: 'Portuguese (Brazilian)',
  pt: 'Portuguese',
  ro: 'Romanian',
  ru: 'Russian',
  sk: 'Slovak',
  sl: 'Slovenian',
  sv: 'Swedish',
  tr: 'Turkish',
  uk: 'Ukrainian',
  zh: 'Chinese (simplified)'
}

const getLanguageCode = (name) => {
  return Object.keys(languageCodes).find((key) => languageCodes[key] === name) || 'en'
}

const Index = ({ languages }) => {
  return (
    <ul>
      {languages.map((language, index) => (
        <li key={index}>
          <Link to={`/${getLanguageCode(language)}`}>
            <LanguageText>{language}</LanguageText>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Index
