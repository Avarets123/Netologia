import React from "react";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";
import { Provider } from "react-redux";
import { store } from "./reducers";
import FilterInput from "./components/FilterInput/FilterInput";




function App() {




  return (
    <Provider store={store}>

      <div className="container">

        <FilterInput />

        <Form />
        <Items />
      </div>

    </Provider>
  )
}

export default App;
