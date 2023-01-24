import React from 'react'
import DataItem from '../DataItem/index.jsx'
import { DataCard } from './styles.js'
import getStrings from '../../helpper/StringHelpper/index.js'

function Index (props) {
  const { data: dataObject } = props
  const language = 'ru'
  const data = []
  for (const [key, value] of Object.entries(dataObject)) {
    if (key !== 'created' && key !== 'edited' && key !== 'url' && value !== null && value !== 'n/a' && value.length !== 0) {
      if (value.toString().includes(',')) {
        let values = value.toString().replace(' ', '').split(',')
        if (values[0].includes('http')) {
          values = values.map((value) => {
            return value.split('/').at(-2)
          })
        } else {
          values = values.map((value) => {
            return value.trim()
          })
        }

        getStrings(key, language).then((res) => {
          data.push({
            title: res,
            content: values
          })
        })
      } else {
        data.push({ title: key, content: value })
      }
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
