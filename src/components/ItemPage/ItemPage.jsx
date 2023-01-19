import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import TitleCard from '../TitleCard/index'
import { BackgroundColor } from './styles'

const ItemPage = () => {
  return (
    <BackgroundColor>
      <NavigationBar />
      <div>
        <TitleCard />
      </div>
    </BackgroundColor>
  )
}

export default ItemPage
