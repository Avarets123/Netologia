import './App.css';
import React, { useState } from 'react';
import Button from './components/Button/Button';
import Content from './components/Cont/Content';



function App() {

  const [url, setUrl] = useState()



  const isClickValue = (name) => {
    if (name === 'Success') {
      setUrl('http://localhost:7070/data');
    } else if (name === 'Wait') {
      setUrl('http://localhost:7070/loading')
    } else if (name === 'Error') {
      setUrl('http://localhost:7070/error')
    }
  }

  return (
    <div className='content'>

      {url ? <Content url={url} /> : null}

      <Button isClick={isClickValue} name={'Success'} type={' btn-success'} />
      <Button isClick={isClickValue} name={'Wait'} type={' btn-warning'} />
      <Button isClick={isClickValue} name={'Error'} type={' btn-danger'} />
    </div>
  )
}

export default App;
