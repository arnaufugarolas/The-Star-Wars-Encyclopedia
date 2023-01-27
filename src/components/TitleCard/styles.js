import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const TitleCard = styled.div`
  display: flex;
  overflow: clip;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
  ${props => props.isRoute ? 'margin-top: 0;' : 'margin-top: 2rem;'}
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
  fontSize: '1.5rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  borderRadius: '1rem'
}
