import React from 'react'
import Index from '../Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function Index () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index
