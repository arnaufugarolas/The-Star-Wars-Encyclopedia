import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import TitleCard from '../TitleCard/index'
import DataCard from '../DataCard/index'
import { BackgroundColor, CentralDiv } from './styles'

const ItemPage = () => {
  return (
    <BackgroundColor>
      <NavigationBar />
      <CentralDiv>
        <TitleCard />
      </CentralDiv>
      <CentralDiv>
        <DataCard />
      </CentralDiv>
    </BackgroundColor>
  )
}

export default ItemPage
