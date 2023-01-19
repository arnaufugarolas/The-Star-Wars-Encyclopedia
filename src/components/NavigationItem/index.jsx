import React from 'react'
import { MenuItem } from './styles'

const Index = (props) => {
  const { link, pageName } = props
  return (
    <li>
      <MenuItem href={link}>{pageName}</MenuItem>
    </li>
  )
}
Index.defaultProps = {
  link: '',
  pageName: 'Home'
}
export default Index
