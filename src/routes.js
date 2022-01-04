import React from 'react'
import DefaultLayout from './layouts/defaultLayout'
import Application from './views/application'
import Home from './views/home'
import AfterLogin from './views/afterLogin'
import AdminView from './views/adminView'

export const privateRoutes = [
  {
    path: '/application',
    exact: true,
    layout: DefaultLayout,
    component: <Application />
  },
  {
    path: '/entries',
    exact: true,
    layout: DefaultLayout,
    component: <AdminView />
  },
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
  },
]
