import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store, { persistor } from "./store";
import App from "./App"


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
