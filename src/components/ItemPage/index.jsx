import React, { useEffect, useState } from 'react'
import TitleCard from '../TitleCard'
import DataCard from '../DataCard'
import { CentralDiv } from './styles'
import Page from '../Page'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Index = () => {
  const { category, id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

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
      setData(res.data)
      setLoading(false)
    })
  }

  return (
    <>
      {data
        ? (
          <Page>
            <CentralDiv>
              <TitleCard title={data.name ? data.name : data.title} />
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
