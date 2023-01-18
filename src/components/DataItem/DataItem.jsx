import React from 'react'

function DataItem ({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default DataItem
