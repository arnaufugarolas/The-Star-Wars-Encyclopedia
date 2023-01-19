import React from 'react'
import NavigationItem from '../NavigationItem'
import LanguageButtonSelector from '../LanguageButtonSelector'
import { BarGrid } from './styles'
import { Unstable_Grid2 as Grid } from '@mui/material/'

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
    <BarGrid container spacing='auto'>
      <Grid item xs='auto'>
        <LanguageButtonSelector />
      </Grid>
      {routes.map((route, index) => (
        <Grid item xs='auto' key={index}>
          <NavigationItem
            key={index}
            route={route.route}
            pageName={route.pageName}
          />
        </Grid>
      ))}
    </BarGrid>
  )
}

export default Index
