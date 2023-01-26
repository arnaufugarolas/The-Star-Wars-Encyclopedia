import NavigationBar from '../NavigationBar/index.jsx'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Index = (props) => {
  const { children } = props
  const { language } = useParams()
  const [loading, setLoading] = useState(false)

  const getRoutes = () => {
    return [
      { route: `/${language}/`, pageName: 'home' },
      { route: `/${language}/people/`, pageName: 'people' },
      { route: `/${language}/films/`, pageName: 'films' },
      { route: `/${language}/species/`, pageName: 'species' },
      { route: `/${language}/vehicles/`, pageName: 'vehicles' },
      { route: `/${language}/starships/`, pageName: 'starships' },
      { route: `/${language}/planets/`, pageName: 'planets' }
    ]
  }
  const [routes, setRoutes] = useState(getRoutes())

  useEffect(() => {
    if (!loading) {
      setRoutes([])
      setLoading(true)
    }
  }, [language])

  useEffect(() => {
    if (loading && routes.length === 0) {
      setRoutes(getRoutes())
    }
  })

  return (
    <>
      <NavigationBar routes={routes} />
      {children}
    </>
  )
}

export default Index
