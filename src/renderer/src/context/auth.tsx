import { Role, User } from '@renderer/types/user.types'
import { ReactElement, createContext, useState, type ReactNode, useCallback } from 'react'

type ObejectLogin = {
  password: string
} & Pick<User, 'username'>

type AuthContextType = {
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

export function AuthContextProvider({ children }: { children: ReactNode }): ReactElement {
  const [authState, setAuthState] = useState<Omit<AuthContextType, 'logout' | 'login'>>({
    isAuthenticated: false,
    user: null
  })

  const logout = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      user: null
    })
  }, [])

  const login = useCallback(async (user: ObejectLogin) => {
    setAuthState({
      isAuthenticated: true,
      user: {
        ...user,
        username: user.username,
        id: 1,
        name: 'John Doe',
        role: Role.User,
        token: 'fake-token'
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ ...authState, logout, login }}>{children}</AuthContext.Provider>
  )
}
