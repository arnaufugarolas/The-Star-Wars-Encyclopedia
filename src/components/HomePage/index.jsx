import React from 'react'
import CategoryCard from '../CategoryCard'
import { CategoriesGrid } from './styles'
import character from './resources/images/characters.png'
import species from './resources/images/species.png'
import films from './resources/images/films.png'
import vehicle from './resources/images/vehicles.png'
import starship from './resources/images/starships.png'
import planet from './resources/images/planets.png'
import Page from '../Page'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import getStrings from '../../helpper/StringHelpper'

const data = [
  {
    categoryName: 'people',
    categoryImage: character,
    route: '/people'
  },
  {
    categoryName: 'species',
    categoryImage: species,
    route: '/species'
  },
  {
    categoryName: 'films',
    categoryImage: films,
    route: '/films'
  },
  {
    categoryName: 'vehicles',
    categoryImage: vehicle,
    route: '/vehicles'
  },
  {
    categoryName: 'starships',
    categoryImage: starship,
    route: '/starships'
  },
  {
    categoryName: 'planets',
    categoryImage: planet,
    route: '/planets'
  }
]

const Index = () => {
  return (
    <Page>
      <CategoriesGrid container rowSpacing={5} columnSpacing={5}>
        {data.map((category, index) => (
          <Grid item xs='auto' key={index}>
            <CategoryCard
              key={index}
              categoryName={getStrings(category.categoryName)}
              categoryImage={category.categoryImage}
              route={category.route}
            />
          </Grid>
        ))}
      </CategoriesGrid>
    </Page>
  )
}

export default Index
