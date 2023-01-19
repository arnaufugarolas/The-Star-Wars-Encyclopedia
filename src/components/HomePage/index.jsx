import React from 'react'
import CategoryCard from '../CategoryCard'
import { CardsDiv } from './styles'
import character from './resources/images/characters.png'
import species from './resources/images/species.png'
import films from './resources/images/films.png'
import vehicle from './resources/images/vehicles.png'
import starship from './resources/images/starships.png'
import planet from './resources/images/planets.png'
import Page from '../Page'

const Index = () => {
  return (
    <Page>
      <CardsDiv>
        <CategoryCard categoryName='People' categoryImage={character} route='/people' />
        <CategoryCard categoryName='Species' categoryImage={species} route='/species' />
        <CategoryCard categoryName='Films' categoryImage={films} route='/films' />
      </CardsDiv>
      <CardsDiv>
        <CategoryCard categoryName='Vehicles' categoryImage={vehicle} route='vehicles' />
        <CategoryCard categoryName='Starships' categoryImage={starship} route='starships' />
        <CategoryCard categoryName='Planets' categoryImage={planet} route='planets' />
      </CardsDiv>
    </Page>
  )
}

export default Index
