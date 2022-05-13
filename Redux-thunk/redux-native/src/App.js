import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PageEdit from './components/pageEdit/PageEdit';
import './App.css';
import Services from './components/services/Services';



function App() {
  const startPage = useNavigate();

  useEffect(() => {

    startPage('api/services', { replace: true });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div className='container'>
      <Routes>
        <Route path='/api/services' element={<Services />} />
        <Route path='/api/services/:id' element={<PageEdit />} />
      </Routes>
    </div>

  );
}

export default App;
