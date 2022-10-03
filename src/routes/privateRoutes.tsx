import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'stores/auth';

export const PrivateRoutes = () => {
  const userToken = useAuth((state) => state.token);

  return userToken ? <Outlet /> : <Navigate to="/login" />;
};
