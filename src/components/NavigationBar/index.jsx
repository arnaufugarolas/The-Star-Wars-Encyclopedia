import React, { useEffect, useState } from 'react'
import NavigationItem from '../NavigationItem/index.jsx'
import LanguageButtonSelector from '../LanguageButtonSelector/index.jsx'
import { BarGrid } from './styles.js'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import getString from '../../helpper/StringHelpper/index.js'
import { useParams } from 'react-router-dom'

const Index = (props) => {
  const { routes } = props
  const { language } = useParams()
  const [data, setData] = useState(routes)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!loading) {
      setLoading(true)
    }
  }, [routes])

  useEffect(() => {
    if (loading) {
      translate()
    }
  }, [loading])

  useEffect(() => {
    console.log('Data changed')
    console.log(data)
  }, [data])

  const translate = () => {
    const translatedCategories = []

    routes.forEach((route, index) => {
      console.log('translatedCategories', translatedCategories)
      getString(route.pageName, language, 'Nav').then((res) => {
        translatedCategories.push({
          pageName: res,
          route: route.route
        })
        if (index === routes.length - 1) {
          setData(translatedCategories)
          setLoading(false)
        }
      })
    })
  }

  return (
    <BarGrid container spacing='auto' disableEqualOverflow rows={1}>
      <Grid item xs>
        <LanguageButtonSelector />
      </Grid>
      {data.map((route, index) => (
        <Grid item xs key={index}>
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
