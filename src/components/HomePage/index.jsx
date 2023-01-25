import React, { useEffect, useState } from 'react'
import CategoryCard from '../CategoryCard/index.jsx'
import { CategoriesGrid } from './styles.js'
import Page from '../Page/index.jsx'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import getString from '../../helpper/StringHelpper'
import { useParams } from 'react-router-dom'
import character from './resources/images/characters.png'
import species from './resources/images/species.png'
import films from './resources/images/films.png'
import vehicle from './resources/images/vehicles.png'
import starship from './resources/images/starships.png'
import planet from './resources/images/planets.png'

const Index = () => {
  const [loading, setLoading] = useState(false)
  const { language } = useParams()
  const categories = [
    {
      categoryName: 'people',
      categoryImage: character,
      route: `/${language}/people`
    },
    {
      categoryName: 'species',
      categoryImage: species,
      route: `/${language}/species`
    },
    {
      categoryName: 'films',
      categoryImage: films,
      route: `/${language}/films`
    },
    {
      categoryName: 'vehicles',
      categoryImage: vehicle,
      route: `/${language}/vehicles`
    },
    {
      categoryName: 'starships',
      categoryImage: starship,
      route: `/${language}/starships`
    },
    {
      categoryName: 'planets',
      categoryImage: planet,
      route: `/${language}/planets`
    }
  ]
  const [data, setData] = useState(categories)

  useEffect(() => {
    if (!loading) {
      setLoading(true)
    }
  }, [categories, language])
  useEffect(() => {
    if (loading) {
      translate()
    }
  }, [loading])

  const translate = () => {
    const translatedCategories = []

    categories.forEach((category, index) => {
      getString(category.categoryName, language).then((result) => {
        translatedCategories.push({
          categoryName: result,
          categoryImage: category.categoryImage,
          route: category.route
        })

        if (index === categories.length - 1) {
          setData(translatedCategories)
          setLoading(false)
        }
      })
    })
  }

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
