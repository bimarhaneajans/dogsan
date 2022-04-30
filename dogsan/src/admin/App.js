import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
 


import Admin from "./Admin"
import { SoftUIControllerProvider } from "../context";

import { logout } from "../redux/actions/auth";
import { clearMessage } from "../redux/actions/message";

import { history } from "../helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "../common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (

    <div>
        
            <SoftUIControllerProvider>
             <Admin /> 
            </SoftUIControllerProvider>

     






    </div>

  );
};

export default App;