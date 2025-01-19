import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from './components/pages/loading'
import { Routes } from './router'

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
