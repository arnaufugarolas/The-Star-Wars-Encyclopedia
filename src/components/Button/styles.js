import styled from '@emotion/styled'

export const Button = styled.button`
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: transparent;
  border: none;
  width: ${props => props.width};
  height: ${props => props.height};
  `
