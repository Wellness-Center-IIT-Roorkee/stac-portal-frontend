import React from 'react';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom'
import DefaultLayout from './layouts/defaultLayout';
import ProtectedRoute from './ProtectedRoute';
import Home from './views/home'
import routes from './routes';
import Application from './views/application'
import AfterLogin from './views/afterLogin'
import AdminView from './views/adminView';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from './actions/userActions';
import { getRecentAppData } from './actions/recentApplicationActions';

function App() {
  const dispatch = useDispatch();
  const isLoginPending = useSelector(state => state.users.isLoginPending);
  const userData = useSelector(state => state.users.userData);
  React.useEffect(() => {
    dispatch(getInfo());
    dispatch(getRecentAppData());
  }, [isLoginPending]);

  const isAuth = true
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<ProtectedRoute isAuthenticated={isAuth} />}>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/application' element={userData.role==="student"&&<Application />}/>
          <Route exact path='/auth' element={<AfterLogin />}/>
          <Route exact path='/entries' element={userData.role==="student"?<Navigate to="/"/>:<AdminView />}/>
          <Route path='*' element={<Home />}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
