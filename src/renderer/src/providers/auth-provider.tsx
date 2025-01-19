import { ReactElement, ReactNode, useCallback, useState } from 'react'
import { AuthContext, AuthContextType, ObejectLogin } from '@renderer/context/auth'
import { Role } from '@renderer/types/user'

export function AuthContextProvider({ children }: { children: ReactNode }): ReactElement {
  const [authState, setAuthState] = useState<Omit<AuthContextType, 'logout' | 'login'>>({
    isAuthenticated: true,
    user: {
      id: 1,
      username: 'admin',
      email: '2V2oZ@example.com',
      name: 'John Doe',
      role: Role.Admin,
      token: 'fake-token'
    }
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
        id: 1,
        username: user.username,
        email: `${user.username}@email.com`,
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
