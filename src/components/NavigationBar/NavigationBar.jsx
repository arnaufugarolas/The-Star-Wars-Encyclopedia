import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import { Bar, Container } from './styles'

const NavigationBar = () => {
  return (
    <Container>
      <Bar>
        <NavigationItem pageName='Home' />
        <NavigationItem pageName='People' />
        <NavigationItem pageName='Films' />
        <NavigationItem pageName='Species' />
        <NavigationItem pageName='Vehicles' />
        <NavigationItem pageName='Starships' />
        <NavigationItem pageName='Planets' />
      </Bar>
    </Container>
  )
}

export default NavigationBar
