import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
 import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../Admin";
 import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SoftUIControllerProvider } from "../context";
  
function BoardAdmin(){
  const [content, setContent] = useState("");

/*   useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []); */

  return ( 
        <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
      
      
  );
};

export default BoardAdmin;
