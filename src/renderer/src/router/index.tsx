import { useRoutes } from 'react-router-dom'

import { AuthLayout } from '@renderer/components/layout/auth-layout'

import { authenticatedRoutes } from './authenticated-routes'
import { unauthenticatedRoutes } from './unauthenticated-routes'

import NotFound from '@renderer/components/pages/not-found'
import { useAuth } from '@renderer/context/auth'

export function AuthRoutes() {
  const element = useRoutes(authenticatedRoutes)

  if (!element) {
    return <NotFound />
  }

  return <AuthLayout>{element}</AuthLayout>
}

export function UnAuthRoutes() {
  const element = useRoutes(unauthenticatedRoutes)

  if (!element) {
    return <NotFound />
  }

  return element
}

export function Routes() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <AuthRoutes /> : <UnAuthRoutes />
}
