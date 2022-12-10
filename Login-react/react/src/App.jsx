import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/Auth/AuthProvider';

import Home from './pages/home';
import Date from './pages/data';
import News from './pages/news';
import News1 from './pages/news1';
import News2 from './pages/news2';
import News3 from './pages/news3';
import Who from './pages/who';
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/data' element={<Date />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/news1' element={<News1 />}/>
            <Route path='/news2' element={<News2/>}/>
            <Route path='/news3' element={<News3 />}/>
            <Route path='/who' element={<Who />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
