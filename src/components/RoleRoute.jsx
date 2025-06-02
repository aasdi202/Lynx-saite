// src/components/RoleRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const RoleRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (allowedRoles.includes(user.role)) return children;

  return <Navigate to="/unauthorized" />;
};

export default RoleRoute;
