import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello from "./components/Hello";
import bar from "./reducers/bar";
import Ps from "./containers/Ps";

let store = createStore(bar);

render(
  <Provider store={store}>
    <Ps />
  </Provider>,
  document.getElementById("root")
);
