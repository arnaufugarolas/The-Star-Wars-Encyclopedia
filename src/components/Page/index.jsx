import NavigationBar from '../NavigationBar/index.jsx'

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
