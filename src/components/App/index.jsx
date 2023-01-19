import React from 'react'
import Home from '../Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ItemPage from '../ItemPage/ItemPage'

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:category/:id' element={<ItemPage />} />
        {/* <Route path='/:category' element={<CategoryPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Index
