import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import CategoryCard from '../CategoryCard/index'
import { BackgroundColor, CardsDiv } from './styles'
import character from '../Home/images/characters.png'
import species from '../Home/images/species.png'
import films from '../Home/images/films.png'
import vehicle from '../Home/images/vehicles.png'
import starship from '../Home/images/starships.png'
import planet from '../Home/images/planets.png'

const Home = () => {
  return (
    <BackgroundColor>
      <NavigationBar />
      <CardsDiv>
        <CategoryCard categoryName='People' categoryImage={character} />
        <CategoryCard categoryName='Species' categoryImage={species} />
        <CategoryCard categoryName='Films' categoryImage={films} />
      </CardsDiv>
      <CardsDiv>
        <CategoryCard categoryName='Vehicles' categoryImage={vehicle} />
        <CategoryCard categoryName='Starships' categoryImage={starship} />
        <CategoryCard categoryName='Planets' categoryImage={planet} />
      </CardsDiv>
    </BackgroundColor>
  )
}

export default Home
