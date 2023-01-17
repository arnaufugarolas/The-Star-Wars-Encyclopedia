import React from 'react'
import NavigationItem from '../NavigationItem/NavigationItem'

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/about'>About</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>
      </ul>
    </nav>
  )
}

export default NavigationBar
