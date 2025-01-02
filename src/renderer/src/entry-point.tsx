import { Suspense, useContext } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { authenticatedRoutes, unauthenticatedRoutes } from './router'

import { AuthContext } from './context/auth'

import NotFound from './components/pages/not-found'
import Loading from './components/pages/loading'

function Routes() {
  const { isAuthenticated } = useContext(AuthContext)
  const element = useRoutes(isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes)

  if (!element) {
    return <NotFound />
  }

  return element
}

function EntryPoint() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </HashRouter>
  )
}

export default EntryPoint
