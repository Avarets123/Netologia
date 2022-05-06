import React from "react";
import Form from "./components/Form/Form";
import Items from "./components/Items/Items";
import { Provider } from "react-redux";
import { store } from "./reducers";




function App() {




  return (
    <Provider store={store}>

      <div className="container">
        <Form />
        <Items />
      </div>

    </Provider>
  )
}

export default App;
