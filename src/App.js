import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import DefaultLayout from './layouts/defaultLayout';
import ProtectedRoute from './ProtectedRoute';
import Home from './views/home'
import routes from './routes';

function App() {
  const isAuth = true
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<ProtectedRoute isAuthenticated={isAuth} />}>
          <Route exact path='/' element={<Home />}/>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
