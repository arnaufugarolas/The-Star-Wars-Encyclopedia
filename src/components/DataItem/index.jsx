import React from 'react'
import { BoltText, DataContainer, RedirectionLink } from './styles'

function Index ({ title, content, redirect }) {
  return (
    <DataContainer>
      <BoltText>{title}: </BoltText>
      {redirect
        ? <RedirectionLink href={redirect}>{content}</RedirectionLink>
        : <p>{content}</p>}
    </DataContainer>
  )
}

export default Index
