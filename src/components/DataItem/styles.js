import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

DataContainer.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}

const Text = styled.p`
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  text-align: center;
`

Text.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}

export const BoltText = styled(Text)`
  font-weight: bold;
`

export const NormalText = styled(Text)`
  font-weight: normal;
`

export const LinkText = styled(NormalText)`
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

LinkText.defaultProps = {
  textColor: 'var(--clr-burgundy)'
}

export const RedirectionLink = styled(Link)`
  text-decoration: none;
`
