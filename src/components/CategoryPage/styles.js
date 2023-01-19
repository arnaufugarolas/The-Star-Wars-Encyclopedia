import styled from '@emotion/styled'
import { Unstable_Grid2 as Grid } from '@mui/material/'

export const PageTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: var(--clr-yellow);
  font-family: var(--ff-primary-body);
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`

export const CentralDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const CategoryGrid = styled(Grid)`
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
