import styled from '@emotion/styled'

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
`
export const LanguageImage = styled.image`
  flexShrink: 0;
  maxHeight: 100%;
`
export const LanguageText = styled.span`
 flex: 1;
 cursor: pointer;
 color: ${props => props.textColor};
 font-family: ${props => props.fontFamily};
 font-size: ${props => props.fontSize};
`

LanguageText.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}
