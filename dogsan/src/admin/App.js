import React, { useState, useEffect, useCallback } from "react"; 

import Admin from "./Admin"
import { SoftUIControllerProvider } from "../context"; 
// import AuthVerify from "./common/AuthVerify";
 const App = () => {
 

  return (

    <div> 
            <SoftUIControllerProvider>
             <Admin /> 
            </SoftUIControllerProvider> 

    </div>

  );
};

export default App;