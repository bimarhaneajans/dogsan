import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import App from "./App";

 import store, { persistor } from "./store";


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
     <App />   
   </BrowserRouter>  
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);






/*  
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./admin/Admin";


// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
 */