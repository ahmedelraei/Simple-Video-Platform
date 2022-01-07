import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './helpers/auth.helpers'

function App() {
  const [authenticated, setAuthenticated] = useState(
    Boolean(localStorage.getItem('authenticated'))
  )
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute isAuthenticated={authenticated} />}
          >
            <Route path="/" element={<Home></Home>} />
          </Route>
          <Route path="/login" element={<SignIn></SignIn>} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
