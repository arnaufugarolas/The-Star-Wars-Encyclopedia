import React from 'react'
import DataItem from '../DataItem/index.jsx'
import { DataCard } from './styles.js'

function Index (props) {
  const { data: dataObject } = props
  const data = []

  for (const [key, value] of Object.entries(dataObject)) {
    if (key !== 'url' && value !== null && value !== 'n/a' && value.length !== 0) {
      data.push({ title: key, content: value })
    }
  }

  return (
    <DataCard>
      {data.map((item, index) => (
        <DataItem key={index} title={item.title} content={item.content} />
      ))}
    </DataCard>
  )
}

Index.defaultProps = {
  data: []
}

export default Index
