import React from 'react'
import { Outlet, Navigate, RouteProps, useLocation } from 'react-router-dom'

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const location = useLocation()
  const { isAuthenticated, ...rest } = props
  console.log(isAuthenticated)
  return (
    // tslint:disable-next-line:no-any
    isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  )
}

export default ProtectedRoute
