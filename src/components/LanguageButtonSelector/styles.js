import styled from '@emotion/styled'

export const ClicableText = styled.p`
  height: ${props => props.height};
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

ClicableText.defaultProps = {
  height: '5rem',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '2rem'
}
