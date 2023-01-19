import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const TitleCard = styled.div`
  display: flex;
  overflow: clip;
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

export const MenuLink = styled(Link)`
  text-decoration: none;
`

TitleCard.defaultProps = {
  className: 'title-card',
  width: '15rem',
  height: '5rem',
  fontSize: '1.5rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  borderRadius: '1rem'
}
