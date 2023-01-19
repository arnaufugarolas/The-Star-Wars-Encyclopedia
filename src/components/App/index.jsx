import React from 'react'
import HomePage from '../HomePage'
import ItemPage from '../ItemPage'
import CategoryPage from '../CategoryPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:category' element={<CategoryPage />} />
        <Route path='/:category/:id' element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
