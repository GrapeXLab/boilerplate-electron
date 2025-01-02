import './styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import EntryPoint from './entry-point'
import { AuthContextProvider } from './context/auth'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <EntryPoint />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
