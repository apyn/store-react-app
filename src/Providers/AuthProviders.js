import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()
const AuthContextDispatcher = createContext()

const AuthProviders = ({ children }) => {
    const [state, setState] = useState(null)
    
    useEffect(() => {
        const userdata = JSON.parse(localStorage.getItem('Auth')) || false
        setState(userdata)
    }, [])
    

  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatcher.Provider value={setState}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  )
}

export default AuthProviders

export const useAuth = () => useContext(AuthContext)
export const useAuthActions = () => useContext(AuthContextDispatcher)
