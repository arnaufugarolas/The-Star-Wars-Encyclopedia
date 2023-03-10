import React from 'react'
import NavigationItem from '../NavigationItem'
import LanguageButtonSelector from '../LanguageButtonSelector'
import { BarGrid } from './styles'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import getStrings from '../../helpper/StringHelpper'

const routes = [
  { route: '/', pageName: 'home' },
  { route: '/people', pageName: 'people' },
  { route: '/films', pageName: 'films' },
  { route: '/species', pageName: 'species' },
  { route: '/vehicles', pageName: 'vehicles' },
  { route: '/starships', pageName: 'starships' },
  { route: '/planets', pageName: 'planets' }
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
            pageName={getStrings(route.pageName)}
          />
        </Grid>
      ))}
    </BarGrid>
  )
}

export default Index
