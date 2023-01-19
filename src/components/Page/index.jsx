import { BackgroundColor } from './styles'
import NavigationBar from '../NavigationBar'

export const Index = (props) => {
  const { children } = props

  return (
    <BackgroundColor>
      <NavigationBar />
      {children}
    </BackgroundColor>
  )
}

export default Index
