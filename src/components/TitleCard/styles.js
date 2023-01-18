import styled from '@emotion/styled'

export const TitleCard = styled.div`
  display: flex;
  overflow: clip;
  width: ${props => props.width};
  height: ${props => props.height};
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius};
  margin: 10%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
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
