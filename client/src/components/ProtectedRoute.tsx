import React, { useContext } from 'react'
import { Outlet, Navigate, RouteProps, useLocation } from 'react-router-dom'
import { AuthContext } from '../contexts/auth.contexts'

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean
}

const ProtectedRoute: React.FC = () => {
  const context = useContext(AuthContext)
  const location = useLocation()
  const isAuthenticated = context.authenticated
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default ProtectedRoute
