import React from 'react'
import { MenuItem } from './styles'

const NavigationItem = (props) => {
  const { link, pageName } = props
  return (
    <li>
      <MenuItem href={link}>{pageName}</MenuItem>
    </li>
  )
}
NavigationItem.defaultProps = {
  link: '',
  pageName: 'Home'
}
export default NavigationItem
