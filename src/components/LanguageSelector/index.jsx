import React from 'react'
import Index from '../LanguageItem'
import Button from '../Button/index'
import button from '../LanguageSelector/button.png'
import { LanguageItemContainer, SelectLanguage, LanguageSelectorContainer, ButtonContainer } from './styles'

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
        <Index languages={languages} />
        <Index languages={languages2} />
        <Index languages={languages3} />
      </LanguageItemContainer>
    </LanguageSelectorContainer>
  )
}

export default Index
