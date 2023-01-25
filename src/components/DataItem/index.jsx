import React, { useEffect, useState } from 'react'
import {
  BoltText,
  DataContainer,
  LinkText,
  NormalText,
  RedirectionLink
} from './styles'
import { useParams } from 'react-router-dom'
import getString from '../../helpper/StringHelpper'

function Index (props) {
  const { title, content } = props
  const { category, id, language } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [contentType, setContentType] = useState(null)

  useEffect(() => {
    if (!loading) {
      setData([])
      setLoading(true)
    }
  }, [category, id])

  useEffect(() => {
    if (loading && data.length === 0) {
      setup().then(() => {
        setLoading(false)
      })
    }
  }, [loading])

  const setup = () => {
    return new Promise((resolve) => {
      if (content instanceof Array) { // is array
        if (content.at(0).includes('https')) { // is array of links
          setContentType('link')
          const newData = []
          content.forEach((item) => {
            const itemUrl = item.toString().replace('https://swapi.dev/api/', '')
            newData.push(`/${language}/${itemUrl}`)
          })
          setData(newData)
          resolve()
        } else { // is array of strings
          setContentType('string')
          const newData = []
          content.forEach((item) => {
            getString(item, language).then((res) => {
              newData.push(res)
            })
          })
          setData(newData)
          resolve()
        }
      } else if (content.includes('https')) { // is link
        setContentType('link')
        const itemUrl = content.toString().replace('https://swapi.dev/api/', '')
        setData([`/${language}/${itemUrl}`])
        resolve()
      } else if (content.match(/,\s/)) { // is string with commas
        setContentType('string')
        const newData = []
        content.split(/,\s/).forEach((item) => {
          getString(item, language).then((res) => {
            newData.push(res)
          })
        })
        setData(newData)
        resolve()
      } else { // is string
        setContentType('string')
        if (isNaN(content)) {
          getString(content, language).then((res) => {
            setData([res])
            resolve()
          })
        } else {
          setData([content])
          resolve()
        }
      }
    })
  }

  return (
    <DataContainer>
      <BoltText>{`${title}:`}</BoltText>
      {contentType === 'link'
        ? (
            data.map((item, index) => (
              <RedirectionLink to={item} key={index}>
                <LinkText>{item.toString().split('/').at(-2)}</LinkText>
              </RedirectionLink>
            )))
        : (
            data.map((item, index) => (
              <NormalText key={index}>{item}</NormalText>
            )))}
    </DataContainer>
  )
}

Index.defaultProps = {
  className: 'data-item',
  title: 'Title',
  content: 'Content',
  redirect: undefined
}

export default Index
