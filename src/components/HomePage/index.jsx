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

const data = [
  {
    categoryName: 'People',
    categoryImage: character,
    route: '/people'
  },
  {
    categoryName: 'Species',
    categoryImage: species,
    route: '/species'
  },
  {
    categoryName: 'Films',
    categoryImage: films,
    route: '/films'
  },
  {
    categoryName: 'Vehicles',
    categoryImage: vehicle,
    route: '/vehicles'
  },
  {
    categoryName: 'Starships',
    categoryImage: starship,
    route: '/starships'
  },
  {
    categoryName: 'Planets',
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
              categoryName={category.categoryName}
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
