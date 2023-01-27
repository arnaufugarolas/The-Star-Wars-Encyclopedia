import styled from '@emotion/styled'

export const DataCard = styled.div`
  display: list-item;
  overflow: clip;
  width: ${props => props.width};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
`

DataCard.defaultProps = {
  className: 'data-card',
  width: '85%',
  fontSize: '1.5rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  borderRadius: '1rem'
}
