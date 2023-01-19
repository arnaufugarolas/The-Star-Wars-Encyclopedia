import React from 'react'
import { MenuItem, MenuLink } from './styles'

const Index = (props) => {
  const { route, pageName } = props
  return (
    <MenuLink to={route}>
      <MenuItem>{pageName}</MenuItem>
    </MenuLink>
  )
}
Index.defaultProps = {
  pageName: 'Home',
  route: '/'
}
export default Index
