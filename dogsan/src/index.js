import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import App from "./App";
 import Admin from "./Admin"
 import store, { persistor } from "./store";
 import { SoftUIControllerProvider } from "context";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
      {/*   <SoftUIControllerProvider>  
        <Admin />
      </SoftUIControllerProvider>  */}  
    <App />   
   </BrowserRouter>  
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


//admin kismi  BrowserRouter
/*
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
       <SoftUIControllerProvider> 
      <Admin />
     </SoftUIControllerProvider>  
   
    </BrowserRouter>  
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


*/
