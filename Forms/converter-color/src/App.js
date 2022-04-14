import React, { useState } from "react";

function App() {

  function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  const [rgbColor, setRgbColor] = useState('');


  const onChange = (e) => {
    let value = e.target.value;
    let cont = document.querySelector('.container');


    if (value.length >= 7) {

      let readRgb = hexToRgb(e.target.value);

      if (value.indexOf('#', 0) > -1 && readRgb !== null ) {

        readRgb = Object.values(readRgb);
        cont.style.backgroundColor = value;        
        setRgbColor(`rgb ${readRgb}`);  

      } else {
        cont.style.backgroundColor = 'red';
        setRgbColor('Ошибка!');
      }
    } else {
      setRgbColor('Введите 7 символов!');
    } 
  }


  return (

    <div   className="container">
      <div className="converter">
        <input onChange={(e) => onChange(e)}
        type='text' name="hex"/>


        <input value={rgbColor}  onChange={() => console.log('rgb')} name="rgb"/>
      </div>
    </div>
  )


}

export default App;
