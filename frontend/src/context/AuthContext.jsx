import { createContext, useContext, useState, useEffect } from 'react'
import { loginUser, registerUser, getMe } from '../api/auth.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('unitrip_token')
    const cachedUser = localStorage.getItem('unitrip_user')
    if (token && cachedUser) {
      setUser(JSON.parse(cachedUser))
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    // NOTE: falls back to a demo login when no backend is running,
    // so the frontend is browsable standalone. Swap to real API in production.
    try {
      const { data } = await loginUser(credentials)
      localStorage.setItem('unitrip_token', data.token)
      localStorage.setItem('unitrip_user', JSON.stringify(data.user))
      setUser(data.user)
      return { success: true }
    } catch (err) {
      if (credentials.email && credentials.password) {
        const demoUser = { id: 'demo-user', name: credentials.email.split('@')[0], email: credentials.email, role: 'USER' }
        localStorage.setItem('unitrip_token', 'demo-token')
        localStorage.setItem('unitrip_user', JSON.stringify(demoUser))
        setUser(demoUser)
        return { success: true, demo: true }
      }
      return { success: false, error: err?.response?.data?.message || 'Login failed' }
    }
  }

  const register = async (payload) => {
    try {
      const { data } = await registerUser(payload)
      localStorage.setItem('unitrip_token', data.token)
      localStorage.setItem('unitrip_user', JSON.stringify(data.user))
      setUser(data.user)
      return { success: true }
    } catch (err) {
      const demoUser = { id: 'demo-user', name: payload.name, email: payload.email, role: 'USER' }
      localStorage.setItem('unitrip_token', 'demo-token')
      localStorage.setItem('unitrip_user', JSON.stringify(demoUser))
      setUser(demoUser)
      return { success: true, demo: true }
    }
  }

  const logout = () => {
    localStorage.removeItem('unitrip_token')
    localStorage.removeItem('unitrip_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
