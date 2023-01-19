import React from 'react'
import DataItem from '../DataItem'
import { DataCard } from './styles'

function Index (props) {
  const { onClickAction, data } = props

  const clickHandler = () => {
    onClickAction()
  }

  return (
    <DataCard onClick={clickHandler}>
      {data.map((item, index) => {
        return (
          <DataItem
            key={index}
            title={item.title}
            content={item.content}
            redirect={item.redirect}
          />
        )
      })}
    </DataCard>
  )
}

export default Index
