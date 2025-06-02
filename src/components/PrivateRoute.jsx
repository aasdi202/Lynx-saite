// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center mt-10">در حال بارگذاری...</div>;

  if (!user) return <Navigate to="/login" />;
  if (!user.emailVerified) return <Navigate to="/verify-email" />;

  return children;
};

export default PrivateRoute;
