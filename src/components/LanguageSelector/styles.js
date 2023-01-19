import styled from '@emotion/styled'

export const LanguageSelectorContainer = styled.div`
 border-radius: 1.5rem;
 background-color: #000000;
 justify-content: center;
 max-width: 60rem;
 margin: 0 auto;
 grid-gap: 16px;
 padding: 16px;
`

export const LanguageItemContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 margin-top: 1rem;
 place-items: center;
`

export const SelectLanguage = styled.h1`
text-align: center;
color: ${props => props.textColor};
font-family: ${props => props.fontFamily};
font-size: ${props => props.fontSize};
`

SelectLanguage.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}
