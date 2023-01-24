import NavigationBar from '../NavigationBar/index.jsx'

export const Index = (props) => {
  const { children } = props

  const routes = [
    { route: '/', pageName: 'home' },
    { route: '/people', pageName: 'people' },
    { route: '/films', pageName: 'films' },
    { route: '/species', pageName: 'species' },
    { route: '/vehicles', pageName: 'vehicles' },
    { route: '/starships', pageName: 'starships' },
    { route: '/planets', pageName: 'planets' }
  ]

  return (
    <>
      <NavigationBar routes={routes} />
      {children}
    </>
  )
}

export default Index
