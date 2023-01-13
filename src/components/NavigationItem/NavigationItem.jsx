import React from 'react'

const NavigationItem = (props) => {
  return (
    <li>
      <a href={props.link}>{props.pageName}</a>
    </li>
  )
}
export default NavigationItem
