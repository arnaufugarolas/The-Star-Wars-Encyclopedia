import Page from '../Page'
import { useParams } from 'react-router-dom'
import { CategoryGrid, CentralDiv, PageTitle } from './styles'
import TitleCard from '../TitleCard'
import { Unstable_Grid2 as Grid } from '@mui/material/'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
      console.log(res.data)
    })
  }

  return (
    <Page>
      <PageTitle>{category.toString()}</PageTitle>
      <CentralDiv>
        <CategoryGrid container spacing={5}>
          {data.map((item, index) => (
            <Grid item xs='auto' sm='auto' md='auto' lg='auto' key={index}>
              <TitleCard
                key={index}
                title={item.name}
                route={`/${category}/${index + 1}`}
              />
            </Grid>))}
        </CategoryGrid>
      </CentralDiv>
    </Page>
  )
}

export default Index
