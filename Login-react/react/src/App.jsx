import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth/AuthProvider';

import Home from './pages/home';
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
