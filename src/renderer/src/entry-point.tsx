import { HashRouter, useRoutes } from 'react-router-dom'
import { authenticatedRoutes } from './router/authenticated-routes'
import { unauthenticatedRoutes } from './router/unauthenticated-routes'
import { useAuth } from './context/auth'
import { Suspense } from 'react'
import NotFound from './components/pages/not-found'
import Loading from './components/pages/loading'

function Routes() {
  const { isAuthenticated } = useAuth()

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
