import React, { useEffect, useState } from 'react'
import TitleCard from '../TitleCard/index.jsx'
import DataCard from '../DataCard/index.jsx'
import { CentralDiv } from './styles.js'
import Page from '../Page/index.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import getString from '../../helpper/StringHelpper'

const Index = () => {
  const { category, id, language } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (!loading) {
      setData(null)
      setLoading(true)
    }
  }, [category, id])
  useEffect(() => {
    if (loading && data === null) {
      getData(`https://swapi.dev/api/${category}/${id}/`)
    }
  }, [loading])

  const getData = (url) => {
    axios.get(url).then((res) => {
      setTitle(res.data.name || res.data.title)
      translate(res.data)
    })
  }

  const translate = (data) => {
    const newData = {}
    const noTranslate = ['created', 'edited', 'url']
    for (const key in data) {
      if (noTranslate.indexOf(key) === -1) {
        getString(key, language).then((res) => {
          newData[res] = data[key]
        })
      } else if (key === 'url') {
        newData[key] = data[key].split('/').at(-2)
      }
    }
    setData(newData)
    setLoading(false)
  }

  return (
    <>
      {data
        ? (
          <Page>
            <CentralDiv>
              <TitleCard title={title} />
            </CentralDiv>
            <CentralDiv>
              <DataCard data={data} />
            </CentralDiv>
          </Page>
          )
        : (
          <Page>
            <CentralDiv>
              <TitleCard title='Loading...' />
            </CentralDiv>
          </Page>
          )}
    </>
  )
}

export default Index
