import React from 'react';
import DefaultLayout from './layouts/defaultLayout';

const Home = React.lazy(() => import('./views/home.js'));

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    component: () => <Home />,
  },
];