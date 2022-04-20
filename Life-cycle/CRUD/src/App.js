import './App.css';
import Notes from './components/Notes';
import React, { useState } from 'react';

function App() {

  const [dataServer, setDataServer] = useState([]);


  const onRefresh = () => {

    fetch('http://localhost:7777/notes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => setDataServer(data))
  }



  return (
    <>

    <div className='header'>
      <h2>Notes</h2>
      <span className='refresh' onClick={() => onRefresh()}><i className="bi bi-arrow-clockwise"></i></span>
    </div>
    <div className='container'>
      <Notes dataServer={dataServer}  deleletItem={(data) => setDataServer(data)}/>
    </div>

    </>
  )

}

export default App;
