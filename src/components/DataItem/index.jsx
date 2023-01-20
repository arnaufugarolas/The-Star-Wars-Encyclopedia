import React from 'react'
import {
  BoltText,
  DataContainer,
  LinkText,
  NormalText,
  RedirectionLink
} from './styles'

function Index (props) {
  const { title, content } = props

  return (
    <DataContainer>
      <BoltText>{`${title}:`}</BoltText>
      {content.includes('https')
        ? (
          <RedirectionLink to={content.toString().replace('https://swapi.dev/api', '')}>
            <LinkText>{content.toString().split('/').at(-2)}</LinkText>
          </RedirectionLink>
          )
        : (
            content instanceof Array
              ? (
                  content.at(0).includes('https')
                    ? (
                        content.map((item, index) => (
                          <RedirectionLink to={item.toString().replace('https://swapi.dev/api', '')} key={index}>
                            <LinkText>{item.toString().split('/').at(-2)}</LinkText>
                          </RedirectionLink>
                        )))
                    : (
                        content.map((item, index) => (
                          <NormalText key={index}>{item}</NormalText>
                        ))
                      )
                )
              : (
                <NormalText>{content.toString()}</NormalText>
                ))}
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
