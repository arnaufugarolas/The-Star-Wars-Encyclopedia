import React from 'react'
import DataItem from '../DataItem/index.jsx'
import { DataCard } from './styles.js'
import getStrings from '../../helpper/StringHelpper/index.js'

function Index (props) {
  const { data: dataObject } = props

  const data = []
  for (const [key, value] of Object.entries(dataObject)) {
    if (key !== 'created' && key !== 'edited' && key !== 'url' && value !== null && value !== 'n/a' && value.length !== 0) {
      if (value.toString().includes(',')) {
        let values = value.toString().replace(' ', '').split(',')
        values = values.map((item) => getStrings(item))
        data.push({ title: getStrings(key), content: values })
      } else {
        data.push({ title: key, content: value })
      }
    }
  }

  return (
    <DataCard>
      {data.map((item, index) => (
        <DataItem key={index} title={getStrings(item.title)} content={getStrings(item.content)} />
      ))}
    </DataCard>
  )
}

Index.defaultProps = {
  data: []
}

export default Index
