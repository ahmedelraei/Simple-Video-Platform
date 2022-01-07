import { createContext } from 'react'

type Context = {
  authenticated: boolean
  setAuthenticated: (c: boolean) => void
}
export const AuthContext = createContext<Context>({
  authenticated: false,
  setAuthenticated: () => undefined,
})
