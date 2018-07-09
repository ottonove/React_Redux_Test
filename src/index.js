import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Hello from "./components/Hello";

render(
  <Provider>
    <Hello />
  </Provider>,
  document.getElementById("root")
);
