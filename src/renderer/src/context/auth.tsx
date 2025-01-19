import { User } from '@renderer/types/user'
import { createContext, useContext } from 'react'

export type ObejectLogin = {
  password: string
} & Pick<User, 'username'>

export type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  logout: () => void
  login: (user: ObejectLogin) => Promise<void>
}

const defaultAuthState: AuthContextType = {
  isAuthenticated: false,
  user: null,
  logout: () => {},
  login: () => Promise.resolve()
}

export const AuthContext = createContext<AuthContextType>(defaultAuthState)

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
