import './styles/globals.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import EntryPoint from './entry-point'
import { AuthContextProvider } from './providers/auth-provider'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/client/query.client'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <EntryPoint />
        <Toaster />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
