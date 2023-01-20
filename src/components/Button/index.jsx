import { Button } from './styles'
import React from 'react'

export const Index = (props) => {
  const { image, clickAction } = props

  const clickHandler = () => {
    clickAction()
  }

  return (
    <Button
      image={image}
      onClick={clickHandler}
      width={props.width}
      height={props.height}
    />
  )
}

Index.defaultProps = {
  image: null,
  clickAction: {},
  width: '5rem',
  height: '5rem'
}

export default Index
