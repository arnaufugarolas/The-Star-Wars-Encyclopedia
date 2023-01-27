import React, { useEffect, useState } from 'react'
import NavigationItem from '../NavigationItem/index.jsx'
import LanguageButtonSelector from '../LanguageButtonSelector/index.jsx'
import { BarGrid } from './styles.js'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import getString from '../../helpper/StringHelpper/index.js'
import { useParams } from 'react-router-dom'

const Index = (props) => {
  const { routes } = props
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const { language } = useParams()

  useEffect(() => {
    if (!loading) {
      setLoading(true)
    }
  }, [routes])

  useEffect(() => {
    if (loading && data.length === 0) {
      translate()
    }
  }, [loading])

  const translate = () => {
    const translatedCategories = []

    routes.forEach((route, index) => {
      getString(route.pageName, language, 'NavigationBar').then((res) => {
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
    <BarGrid container spacing='auto'>
      <Grid item xs='auto'>
        <LanguageButtonSelector />
      </Grid>
      {data.map((route, index) => (
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
