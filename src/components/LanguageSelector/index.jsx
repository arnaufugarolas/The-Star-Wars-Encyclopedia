import React from 'react'
import LanguageItem from '../LanguageItem'
import Button from '../Button/index'
import button from './resources/images/button.png'
import { SelectLanguage, LanguageSelectorContainer, ButtonContainer } from './styles'
import { Unstable_Grid2 as Grid } from '@mui/material/'

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
      <Grid container spacing={1}>
        <Grid xs>
          <LanguageItem languages={languages} />
        </Grid>
        <Grid xs>
          <LanguageItem languages={languages2} />
        </Grid>
        <Grid xs>
          <LanguageItem languages={languages3} />
        </Grid>
      </Grid>
    </LanguageSelectorContainer>
  )
}

export default Index
