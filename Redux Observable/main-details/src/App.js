import { Routes, Route } from 'react-router-dom';
import PageEdit from './components/pageEdit/PageEdit';
import './App.css';
import Services from './components/services/Services';


function App() {

  return (

    <div className='container'>
      <Routes>
        <Route path='/' element={<Services />} />
        <Route path='/api/services/edit/:id' element={<PageEdit />} />
      </Routes>



    </div>


  );
}

export default App;
