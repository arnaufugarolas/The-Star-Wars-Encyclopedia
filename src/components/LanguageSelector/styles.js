import styled from '@emotion/styled'

export const LanguageSelectorContainer = styled.div`
  max-width: 50rem;
  border-radius: 1rem;
  opacity: 0.85;
  justify-content: center;
  background-color: #000000;
`
export const LanguageItemContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`

export const SelectLanguage = styled.h1`
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  text-align: center;
`

SelectLanguage.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}
