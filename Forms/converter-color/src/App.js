import React, { useState } from "react";

function App() {


  const [rgbColor, setRgbColor] = useState('');


  const onChange = (e) => {
    let value = e.target.value;
    let cont = document.querySelector('.container');


    if (value.length >= 7) {
      if (value.indexOf('#', 0) > -1) {
        
        cont.style.backgroundColor = value;
        setRgbColor(getComputedStyle(cont).backgroundColor);
        console.log(getComputedStyle(cont).backgroundColor); 
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
