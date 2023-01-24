import React from 'react'
import LanguageItem from '../LanguageItem/index.jsx'
import Button from '../Button/index.jsx'
import button from './resources/images/button.png'
import {
  ButtonContainer,
  LanguageItemContainer,
  LanguageSelectorContainer,
  SelectLanguage
} from './styles.js'

const languages = ['English', 'Wookiee', 'German', 'Bulgarian', 'Czech', 'Chinese (simplified)', 'Danish', 'Slovak', 'Slovenian', 'Estonian']
const languages2 = ['Spanish', 'Finnish', 'French', 'Greek', 'Hungarian', 'Indonesian', 'Italian', 'Japanese', ' Latvin', 'Lithuanian']
const languages3 = ['Dutch', 'Polish', 'Portugese', 'Portuguese (Brazilian)​', 'Romanian', 'Russian', 'Swedish', 'Turkish', 'Ucranian']

const Index = () => {
  return (
    <LanguageSelectorContainer>
      <SelectLanguage>Select your Language</SelectLanguage>
      <ButtonContainer>
        <Button image={button} />
      </ButtonContainer>
      <LanguageItemContainer>
        <LanguageItem languages={languages} />
        <LanguageItem languages={languages2} />
        <LanguageItem languages={languages3} />
      </LanguageItemContainer>
    </LanguageSelectorContainer>
  )
}

export default Index
