import React from 'react'
import Index from '../NavigationItem'
import Index from '../LanguageButtonSelector'
import { Bar, Container } from './styles'

const Index = () => {
  return (
    <Container>
      <Bar>
        <Index />
        <Index pageName='Home' />
        <Index pageName='People' />
        <Index pageName='Films' />
        <Index pageName='Species' />
        <Index pageName='Vehicles' />
        <Index pageName='Starships' />
        <Index pageName='Planets' />
      </Bar>
    </Container>
  )
}

export default Index
