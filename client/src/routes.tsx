import React from 'react';
import { Navigate } from 'react-router-dom';
import HomeView from './views/HomeView';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import AccountView from './views/account/AccountView/AccountView';
import UserEditView from './views/admin/user/UserEditView';
import UserListView from './views/admin/user/UserListView';
import LoginView from './views/auth/LoginView';
import NotFoundView from './views/errors/NotFoundView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'home', element: <HomeView /> },
      { path: 'account', element: <AccountView /> },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          {
            path: 'user',
            children: [
              { path: 'list', element: <UserListView /> },
              { path: 'add', element: <UserEditView /> },
              { path: 'edit/:id', element: <UserEditView /> },
            ],
          },
        ],
      },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
