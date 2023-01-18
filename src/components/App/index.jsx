import React from 'react'
import Data from '../DataItem/DataItem'

function Index () {
  return (
    <div>
      <Data
        title='Height:'
        content='172 cm'
      />
      <Data
        title='Mass:'
        content='72kg'
      />
      <Data
        title='Hair Color:'
        content='Blond'
      />
    </div>
  )
}

export default Index
