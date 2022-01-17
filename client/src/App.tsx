import { useState } from 'react'
import './App.css'
import SignIn from './routes/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthContext } from './contexts/auth.contexts'
import Analytics from './routes/Analytics'
import Register from './routes/Register'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './constants'
import CssBaseline from '@mui/material/CssBaseline'
import Upload from './routes/Upload'
import VideosStats from './routes/VideosStats'

function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') ? true : false
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
          <Routes>
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<Home></Home>} />
            </Route>
            <Route path="/login" element={<SignIn></SignIn>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Analytics></Analytics>} />
            </Route>
            <Route path="/dashboard/upload" element={<ProtectedRoute />}>
              <Route path="/dashboard/upload" element={<Upload></Upload>} />
            </Route>
            <Route path="/dashboard/videos" element={<ProtectedRoute />}>
              <Route
                path="/dashboard/videos"
                element={<VideosStats></VideosStats>}
              />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
