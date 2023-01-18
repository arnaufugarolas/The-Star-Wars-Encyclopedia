import styled from '@emotion/styled'

export const DataContainer = styled.div`
 display: flex;
 flexDirection: row;
 gap: 0.3rem;
 text-align: center;
 color: ${props => props.textColor};
 font-family: ${props => props.fontFamily};
 font-size: ${props => props.fontSize};
 `
export const BoltText = styled.p`
font-weight: bold;
`

DataContainer.defaultProps = {
  textColor: 'var(--clr-yellow)',
  fontFamily: 'var(--ff-primary-body)',
  fontSize: '1.5rem'
}
