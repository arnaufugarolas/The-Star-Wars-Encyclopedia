import NavigationBar from '../NavigationBar/index.jsx'
import React from 'react'
import { useParams } from 'react-router-dom'

export const Index = (props) => {
  const { children } = props
  const { language } = useParams()

  const routes = [
    { route: `/${language}/`, pageName: 'home' },
    { route: `/${language}/people/`, pageName: 'people' },
    { route: `/${language}/films/`, pageName: 'films' },
    { route: `/${language}/species/`, pageName: 'species' },
    { route: `/${language}/vehicles/`, pageName: 'vehicles' },
    { route: `/${language}/starships/`, pageName: 'starships' },
    { route: `/${language}/planets/`, pageName: 'planets' }
  ]

  return (
    <>
      <NavigationBar routes={routes} />
      {children}
    </>
  )
}

export default Index
