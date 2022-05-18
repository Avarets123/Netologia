import React, { useState } from "react";
import { ajax } from 'rxjs/ajax'

function App() {

  const [state, setState] = useState(null);


  const onChange = (e) => {

    if (!e.target.value) return setState(null)

    const search$ = ajax.getJSON(`http://localhost:7000/api/search${e.target.value}`);

    search$.subscribe((val) => {

      setState(val)
    }, (err) => {
      return;
    });
  }


  const UseState = () => {
    return state.map(({ name, id }) => <div key={id} className="item">{name}</div>)
  }

  return (
    <div className="container">
      <input className="search" onChange={(e) => onChange(e)} placeholder="search skills" />

      {state ? <UseState /> : null}
    </div>
  )
}

export default App;
