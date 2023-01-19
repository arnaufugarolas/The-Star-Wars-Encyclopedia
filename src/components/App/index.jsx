import React from 'react'
import Home from '../Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
