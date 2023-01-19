import React from 'react'
import {
  BoltText,
  DataContainer,
  LinkText,
  NormalText,
  RedirectionLink
} from './styles'
import { BrowserRouter as Router } from 'react-router-dom'

function Index (props) {
  const { title, content, redirect } = props

  return (
    <DataContainer>
      <BoltText>{title}:</BoltText>
      {redirect
        ? <Router>
          <RedirectionLink to={redirect}>
            <LinkText>{content}</LinkText>
          </RedirectionLink>
        </Router> // eslint-disable-line react/jsx-closing-tag-location
        : <NormalText>{content}</NormalText>}
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
