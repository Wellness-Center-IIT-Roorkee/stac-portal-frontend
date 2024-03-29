import React from 'react'
import {
  Navigate,
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { privateRoutes, publicRoutes } from './routes'
import Home from './views/home'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from './actions/userActions'
import { getApplications } from './actions/applicationActions'

function App () {
  const dispatch = useDispatch()
  const isLoginPending = useSelector(state => state.user.isLoginPending)
  const role = useSelector(state => state.user?.userData?.role)
  React.useEffect(() => {
    dispatch(getInfo())
    dispatch(getApplications())
  }, [isLoginPending])

  return (
    <div className='App'>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const { layout: Layout } = route
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<Layout>{route.component}</Layout>}
              />
            )
          })}
          <Route path='/' element={<PrivateRoute />}>
            {privateRoutes.map((route, index) => {
              const { layout: Layout } = route
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={
                    route.allowedRoles.includes(role) ? (
                      <Layout>{route.component}</Layout>
                    ) : (
                      <Navigate to='/' />
                    )
                  }
                />
              )
            })}
          </Route>
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
