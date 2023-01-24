import Page from '../Page/index.jsx'
import { useParams } from 'react-router-dom'
import { CategoryGrid, CentralDiv, PageTitle } from './styles.js'
import TitleCard from '../TitleCard/index.jsx'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getStrings from '../../helpper/StringHelpper/index.js'

export const Index = () => {
  const { category } = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!loading) {
      setData([])
      setLoading(true)
    }
  }, [category])
  useEffect(() => {
    if (loading && data.length === 0) {
      getData(`https://swapi.dev/api/${category}/`)
    }
  }, [loading])

  const getData = (url) => {
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
      <PageTitle>{getStrings(category)}</PageTitle>
      <CentralDiv>
        <CategoryGrid container spacing={5}>
          {data.map((item, index) => (
            <Grid item xs='auto' key={index}>
              <TitleCard
                key={index}
                title={item.name}
                route={`/${category}/${item.url.split('/').at(-2)}`}
              />
            </Grid>))}
        </CategoryGrid>
      </CentralDiv>
    </Page>
  )
}

export default Index
