import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/todo";

import App from "./components/App"

const store = createStore(reducers);

store.subscribe(()=>{
  console.log(store.getState());
})

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)