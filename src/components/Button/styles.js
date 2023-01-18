import styled from '@emotion/styled'

export const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  border: none;
  background-color: transparent;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`

Button.defaultProps = {
  className: 'button',
  width: '5rem',
  height: '5rem'
}
