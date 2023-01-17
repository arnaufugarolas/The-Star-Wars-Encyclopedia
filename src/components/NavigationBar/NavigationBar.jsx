import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'
import { Bar, Container } from './styles'

const NavigationBar = () => {
  return (
    <Container>
      <Bar>
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
        <NavigationItem />
      </Bar>
    </Container>
  )
}

export default NavigationBar
