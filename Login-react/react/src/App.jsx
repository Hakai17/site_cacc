import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth/AuthProvider';

import Home from './pages/home';
import Date from './pages/data';
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/data' element={<Date />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
