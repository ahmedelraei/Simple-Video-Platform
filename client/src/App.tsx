import { useState } from 'react'
import './App.css'
import SignIn from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './contexts/auth.contexts'
import Dashboard from './components/Dashboard'

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') ? true : false
  )
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home></Home>} />
          </Route>
          <Route path="/login" element={<SignIn></SignIn>} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
