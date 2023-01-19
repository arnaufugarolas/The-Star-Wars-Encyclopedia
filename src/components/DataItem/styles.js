import styled from '@emotion/styled'

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  gap: 1rem;
  text-align: center;
`
export const BoltText = styled.p`
  font-weight: bold;
`

export const NormalText = styled.p`
  font-weight: normal;
`

export const RedirectionLink = styled.a`
  color: var(--clr-burgundy);
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

DataContainer.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}
