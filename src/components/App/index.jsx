import React from 'react'
import DataCard from '../DataCard'

const data = [
  { title: 'Name', content: 'John Doe', redirect: '/profile' },
  { title: 'Age', content: '25' }
]

function Index () {
  return (
    <div className='App'>
      <DataCard data={data} title='Probe' />
    </div>
  )
}

export default Index
