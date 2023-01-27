import styled from '@emotion/styled'

export const LanguageText = styled.p`
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  text-align: center;
`

LanguageText.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}
