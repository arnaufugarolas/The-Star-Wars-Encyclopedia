import { TitleCard } from './styles'
import React from 'react'

export const Index = (props) => {
  const { title, onClickAction } = props

  const clickHandler = () => {
    onClickAction()
  }

  return (
    <TitleCard onClick={clickHandler}>
      {title}
    </TitleCard>
  )
}

Index.defaultProps = {
  title: 'Title',
  onClickAction: {}
}

export default Index
