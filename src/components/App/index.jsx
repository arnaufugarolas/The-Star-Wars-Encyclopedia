import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage'
import CategoryPage from '../CategoryPage'
import ItemPage from '../ItemPage'

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/en/' />} />
        <Route path='/:language/' element={<HomePage />} />
        <Route path='/:language/:category/' element={<CategoryPage />} />
        <Route path='/:language/:category/:id/' element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
