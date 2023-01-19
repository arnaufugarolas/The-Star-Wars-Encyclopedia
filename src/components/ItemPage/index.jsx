import React from 'react'
import TitleCard from '../TitleCard'
import DataCard from '../DataCard'
import { CentralDiv } from './styles'
import Page from '../Page'

const Index = () => {
  return (
    <Page>
      <CentralDiv>
        <TitleCard />
      </CentralDiv>
      <CentralDiv>
        <DataCard />
      </CentralDiv>
    </Page>
  )
}

export default Index
