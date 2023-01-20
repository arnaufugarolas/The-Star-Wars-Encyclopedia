import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const CategoryCard = styled.div`
  display: flex;
  overflow: clip;
  width: 15rem;
  height: 20rem;
  align-items: center;
  justify-content: center;
  padding-top: 15.5rem;
  padding-bottom: 1.5rem;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  background-image: url(${props => props.backgroundImage});
  background-position: center 1rem;
  background-repeat: no-repeat;
  background-size: 13rem 13rem;
  color: ${props => props.textColor};
  cursor: pointer;
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

CategoryCard.defaultProps = {
  className: 'category-card',
  fontSize: '2rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)'
}

export const CategoryLink = styled(Link)`
  text-decoration: none;
`
