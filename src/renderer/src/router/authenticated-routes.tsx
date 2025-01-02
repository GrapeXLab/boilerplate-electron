import React from 'react'
import { RouteObject } from 'react-router-dom'

const PAGES = import.meta.glob('../pages/\\(authenticated\\)/**/*.tsx')

const authenticatedRoutes: RouteObject[] = Object.entries(PAGES).map(([path, component]) => {
  const routePath = path
    .replace('../pages/(authenticated)', '')
    .replace(/\.tsx$/, '')
    .replace(/\/index$/, '/')
    .replace(/\[([^\]]+)\]/g, ':$1')
    .replace(/^\//, '')

  return {
    path: routePath === '' ? '/' : routePath,
    // @ts-ignore - React.lazy doesn't accept a dynamic import
    element: React.createElement(React.lazy(component))
  }
})

export default authenticatedRoutes
