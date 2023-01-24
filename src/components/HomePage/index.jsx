import React, { useEffect, useState } from 'react'
import CategoryCard from '../CategoryCard/index.jsx'
import { CategoriesGrid } from './styles.js'
import Page from '../Page/index.jsx'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import getStrings from '../../helpper/StringHelpper/index.js'

const Index = (props) => {
  const { categories } = props
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(categories)
  const language = 'ru'

  useEffect(() => {
    if (!loading) {
      setLoading(true)
    }
  }, [categories])
  useEffect(() => {
    if (loading) {
      translate()
    }
  }, [loading])

  const translate = () => {
    const translatedCategories = []

    categories.forEach((category, index) => {
      getStrings(category.categoryName, language, 'HomePage').then((res) => {
        translatedCategories.push({
          categoryName: res,
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
