import Page from '../Page/index.jsx'
import { useParams } from 'react-router-dom'
import { CategoryGrid, CentralDiv, PageTitle } from './styles.js'
import TitleCard from '../TitleCard/index.jsx'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getString from '../../helpper/StringHelpper/index.js'

export const Index = () => {
  const { category, language } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState(category)

  useEffect(() => {
    console.log('category', category)
    if (!loading) {
      setData([])
      setLoading(true)
    }
  }, [category])
  useEffect(() => {
    if (loading && data.length === 0) {
      console.log('loading', loading)
      getData(`https://swapi.dev/api/${category}/`)
    }
  }, [loading])

  const getData = (url) => {
    getString(category, language).then((res) => {
      setTitle(res)
    })

    axios.get(url).then((res) => {
      setData((prev) => [...prev, ...res.data.results])

      if (res.data.next) {
        getData(res.data.next)
      } else {
        setLoading(false)
      }
    })
  }

  return (
    <Page>
      <PageTitle>{title}</PageTitle>
      <CategoryGrid container spacing={5}>
        {data.map((item, index) => (
          <Grid item xs='auto' key={index}>
            <TitleCard
              key={index}
              title={item.name ? item.name : item.title}
              route={`/${language}/${category}/${item.url.split('/').at(-2)}`}
            />
          </Grid>))}
      </CategoryGrid>
      <CentralDiv />
    </Page>
  )
}

export default Index
