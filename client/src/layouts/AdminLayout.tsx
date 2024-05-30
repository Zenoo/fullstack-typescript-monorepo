import {Navigate, Outlet} from 'react-router-dom';

import React from 'react';
import {useAuth} from '../hooks/useAuth';

function AdminLayout() {
  const auth = useAuth();

  return auth.user.admin ? <Outlet /> : <Navigate to="/app/home" />;
}

export default AdminLayout;
