import React from 'react'
import HomePage from '../HomePage/index.jsx'
import ItemPage from '../ItemPage/index.jsx'
import CategoryPage from '../CategoryPage/index.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import character from '../HomePage/resources/images/characters.png'
import species from '../HomePage/resources/images/species.png'
import films from '../HomePage/resources/images/films.png'
import vehicle from '../HomePage/resources/images/vehicles.png'
import starship from '../HomePage/resources/images/starships.png'
import planet from '../HomePage/resources/images/planets.png'

const categories = [
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage categories={categories} />} />
        <Route path='/:category' element={<CategoryPage />} />
        <Route path='/:category/:id' element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
