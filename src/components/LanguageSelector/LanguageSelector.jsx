import React from 'react'
import LanguageItem from '../LanguageItem/LanguageItem'
import { LanguageItemContainer, SelectLanguage, LanguageSelectorContainer } from './styles'

const languages = ['English', 'Wookiee', 'German', 'Bulgarian', 'Czech', 'Chinese (simplified)', 'Danish', 'Slovak', 'Slovenian', 'Estonian']
const languages2 = ['Spanish', 'Finnish', 'French', 'Greek', 'Hungarian', 'Indonesian', 'Italian', 'Japanese', ' Latvin', 'Lithuanian']
const languages3 = ['Dutch', 'Polish', 'Portugese', 'Portuguese (Brazilian)​', 'Romanian', 'Russian', 'Swedish', 'Turkish', 'Ucranian']

const LanguageSelector = () => {
  return (
    <LanguageSelectorContainer>
      <SelectLanguage>Select your Language</SelectLanguage>
      <LanguageItemContainer>
        <LanguageItem languages={languages} />
        <LanguageItem languages={languages2} />
        <LanguageItem languages={languages3} />
      </LanguageItemContainer>
    </LanguageSelectorContainer>
  )
}

export default LanguageSelector
