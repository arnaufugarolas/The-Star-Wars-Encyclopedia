import styled from '@emotion/styled'

export const ClicableText = styled.p`
width: ${props => props.width};
height: ${props => props.height};
align-items: center;
justify-content: center;
color: ${props => props.textColor};
font-family: ${props => props.fontFamily};
font-size: ${props => props.fontSize};
`

ClicableText.defaultProps = {
  width: '15rem',
  height: '5rem',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '2rem'
}
