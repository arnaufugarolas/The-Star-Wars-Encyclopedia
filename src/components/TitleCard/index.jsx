import { MenuLink, TitleCard } from './styles'
import React from 'react'

export const Index = (props) => {
  const { title, route } = props

  return (
    <>
      {route
        ? (
          <MenuLink to={route}>
            <TitleCard>{title}</TitleCard>
          </MenuLink>
          )
        : (
          <TitleCard>{title}</TitleCard>
          )}
    </>
  )
}

Index.defaultProps = {
  title: 'Title',
  route: undefined
}

export default Index
