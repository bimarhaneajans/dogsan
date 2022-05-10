import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./admin/Admin";
 
// import App from "../src/App"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


 import store, { persistor } from "./store";
// DOGSAN React Context Provider
import { SoftUIControllerProvider } from "context";

 ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider> 
 
  </BrowserRouter>,
   
  document.getElementById("root")
);

