import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import DefaultLayout from './layouts/defaultLayout';
import ProtectedRoute from './ProtectedRoute';
import Home from './views/home'
import routes from './routes';
import Application from './views/application'
import AfterLogin from './views/afterLogin'

function App() {
  const isAuth = true
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<ProtectedRoute isAuthenticated={isAuth} />}>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/application' element={<Application />}/>
          <Route exact path='/auth' element={<AfterLogin />}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
