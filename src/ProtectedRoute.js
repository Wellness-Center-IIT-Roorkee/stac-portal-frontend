import React, { Suspense } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const NewComponent = ({ component: Component, layout: Layout, ...restProps }) => {
  return <Component {...restProps} />;
};

const ProtectedRoute = ({
  layout: Layout,
  isAuthenticated,
  ...rest
}) => {
  return true ? (
            <NewComponent layout={Layout} component={Outlet} />
        ) : (
          <Navigate to="/login" />
        );
};

export default ProtectedRoute;