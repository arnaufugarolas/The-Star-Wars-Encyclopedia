import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const MenuItem = styled.p`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

export const MenuLink = styled(Link)`
  text-decoration: none;
`

MenuItem.defaultProps = {
  height: '5rem',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '2em'
}
