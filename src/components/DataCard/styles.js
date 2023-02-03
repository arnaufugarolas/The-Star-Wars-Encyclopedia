import styled from '@emotion/styled'

export const DataCard = styled.div`
  display: list-item;
  overflow: clip;
  align-items: center;
  justify-content: center;
  padding: 0.5% 1%;
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  margin-top: 2rem;
`

DataCard.defaultProps = {
  className: 'data-card',
  fontSize: '1.5rem',
  backgroundColor: 'var(--clr-black)',
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  borderRadius: '1rem'
}
