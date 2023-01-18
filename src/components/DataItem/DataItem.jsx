import React from 'react'
import { DataContainer, BoltText } from './styles'

function DataItem ({ title, content }) {
  return (
    <DataContainer>
      <BoltText>{title}</BoltText>
      <p>{content}</p>
    </DataContainer>
  )
}

export default DataItem
