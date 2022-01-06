import React from 'react'
import DefaultLayout from './layouts/defaultLayout'
import Application from './views/application'
import Home from './views/home'
import AfterLogin from './views/afterLogin'
import AdminView from './views/adminView'
import UpdateApplicationView from './views/updateApplicationView'
import { STUDENT, ADMIN, FACULTY } from './constants/roles'

export const privateRoutes = [
  {
    path: '/application',
    exact: true,
    layout: DefaultLayout,
    component: <Application />,
    allowedRoles: [STUDENT]
  },
  {
    path: '/application/:id/update',
    exact: true,
    layout: DefaultLayout,
    component: <UpdateApplicationView />,
    allowedRoles: [STUDENT]
  },
  {
    path: '/fac',
    exact: true,
    layout: DefaultLayout,
    component: <AdminView />,
    allowedRoles: [ADMIN, FACULTY]
  }
]

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: <Home />
  },
  {
    path: '/auth',
    exact: true,
    layout: DefaultLayout,
    component: <AfterLogin />
  }
]
