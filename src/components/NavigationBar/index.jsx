import React from 'react'
import NavigationItem from '../NavigationItem'
import LanguageButtonSelector from '../LanguageButtonSelector'
import { Bar, Container } from './styles'

const routes = [
  { route: '/', pageName: 'Home' },
  { route: '/people', pageName: 'People' },
  { route: '/films', pageName: 'Films' },
  { route: '/species', pageName: 'Species' },
  { route: '/vehicles', pageName: 'Vehicles' },
  { route: '/starships', pageName: 'Starships' },
  { route: '/planets', pageName: 'Planets' }
]

const Index = () => {
  return (
    <Container>
      <Bar>
        <LanguageButtonSelector />
        {routes.map((route, index) => (
          <NavigationItem
            key={index}
            route={route.route}
            pageName={route.pageName}
          />
        ))}
      </Bar>
    </Container>
  )
}

export default Index
