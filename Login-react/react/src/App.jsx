import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/Auth/AuthProvider';
import { RequireAuth } from './context/Auth/RequireAuth';

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup';
import Private from './pages/inside'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Signup />}/>
            <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
