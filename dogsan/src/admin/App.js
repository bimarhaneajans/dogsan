import React, { useState, useEffect, useCallback } from "react"; 

import Admin from "./Admin"
import { SoftUIControllerProvider } from "../context"; 
// import AuthVerify from "./common/AuthVerify";
 const App = () => {
 

  return ( 
            <SoftUIControllerProvider>
             <Admin /> 
            </SoftUIControllerProvider> 

 
  );
};

export default App;