import NavigationBar from '../NavigationBar'

export const Index = (props) => {
  const { children } = props

  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}

export default Index
