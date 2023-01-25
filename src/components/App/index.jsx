import React from 'react'
import HomePage from '../HomePage/index.jsx'
import ItemPage from '../ItemPage/index.jsx'
import CategoryPage from '../CategoryPage/index.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

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
