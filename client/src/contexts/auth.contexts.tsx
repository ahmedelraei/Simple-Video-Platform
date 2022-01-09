import { createContext } from 'react'

export interface IContext {
  authenticated: boolean
  setAuthenticated: (c: boolean) => void
}
export const AuthContext = createContext<IContext>({
  authenticated: false,
  setAuthenticated: () => undefined,
})

/* export const AuthProvider = (children: React.ReactNode) => {
  const authState: boolean = localStorage.getItem('authenticated')
    ? true
    : false
  const [isAuth, setAuth] = useState(authState)
  useEffect(() => {
    return (
      <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>
    )
  }, [])
} */
