import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';
import { Dashboard, Login, Register } from '../pages';

export const routes = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
  {
    path: '/dashboard',
    element: <Outlet />,
    children: [{ path: '/dashboard', element: <Dashboard /> }],
  },
];
