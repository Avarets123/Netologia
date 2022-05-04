import './App.css';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import AddPost from './components/AddPost/AddPost';
import WatchPost from './components/WatchPost/WatchPost';
import PostEdit from './components/PostEdit/PostEdit'


function App() {




  return (
    <>

      <div className='container'>
        <Routes>
          <Route path='/posts/new' element={<AddPost />} />
          <Route path='/' element={<Posts />} />
          <Route path='/posts/:id' element={<WatchPost />} />
          <Route path='/posts/:id/edit' element={<PostEdit />} />
        </Routes>

      </div>

    </>
  )
}

export default App;
