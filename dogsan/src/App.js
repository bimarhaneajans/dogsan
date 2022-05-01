import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
/* import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin"; */
import Kataloglar from "./components/kataloglar/kataloglar";
import Kvc from "./components/kvc/kvc";
import Kvc2 from "./components/kvc/kvc2";
import EmilebilirSuturler from "./components/EmilebilirSuturler/EmilebilirSuturler";
import EmilebilirSuturler2 from "./components/EmilebilirSuturler/EmilebilirSuturler2";
import EmilmeyenSuturler from "./components/EmilmeyenSuturler/EmilmeyenSuturler";
import EmilmeyenSuturler2 from "./components/EmilmeyenSuturler/EmilmeyenSuturler2";
import EmilebilirHemostat from "./components/EmilebilirHemostat/EmilebilirHemostat";
import EmilebilirHemostat2 from "./components/EmilebilirHemostat/EmilebilirHemostat2";
import DentalSuturler from "./components/DentalSuturler/DentalSuturler";
import DentalSuturler2 from "./components/DentalSuturler/DentalSuturler2";
import Veterinerlik from "./components/Veterinerlik/Veterinerlik";
import Veterinerlik2 from "./components/Veterinerlik/Veterinerlik2";
import HeaderKurumsal from "./components/kurumsal/header/HeaderKurumsal";
import Kurumsal from "./components/kurumsal/kurumsal";
import Hakkimizda from  "./components/kurumsal/hakkimizda";
import Degerler from  "./components/kurumsal/degerler";
import SosyalSorumluluk from  "./components/kurumsal/SosyalSorumluluk";
import Tarihce from "./components/kurumsal/tarihce";
import Igneler from  "./components/igneler/igneler";
import Admin from  "./admin/App";


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   history.listen((location) => {
  //     dispatch(clearMessage()); // clear message when changing location
  //   });
  // }, [dispatch]);

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
    // <Router history={history}>
    <div>
     {/*  <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Dogsan
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to="/mod" className="nav-link">
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to="/user" className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav> */}

      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/kvc" element={<Kvc />} />
          <Route exact path="/kvc2" element={<Kvc2/>} />
          <Route exact path="/EmilebilirSuturler" element={<EmilebilirSuturler />} />
          <Route exact path="/EmilebilirSuturler2" element={<EmilebilirSuturler2/>} />
          <Route exact path="/EmilmeyenSuturler" element={<EmilmeyenSuturler />} />
          <Route exact path="/EmilmeyenSuturler2" element={<EmilmeyenSuturler2/>} />
          <Route exact path="/EmilebilirHemostat" element={<EmilebilirHemostat />} />
          <Route exact path="/EmilebilirHemostat2" element={<EmilebilirHemostat2/>} />
          <Route exact path="/DentalSuturler" element={<DentalSuturler />} />
          <Route exact path="/DentalSuturler2" element={<DentalSuturler2/>} />
          <Route exact path="/Veterinerlik" element={<Veterinerlik />} />
          <Route exact path="/Veterinerlik2" element={<Veterinerlik2/>} />
          <Route path="/Kataloglar" element={<Kataloglar />} />
          <Route path="/HeaderKurumsal" element={<HeaderKurumsal />} />
          <Route path="/Kurumsal" element={<Kurumsal />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/Degerler" element={<Degerler />} />
          <Route path="/SosyalSorumluluk" element={<SosyalSorumluluk />} />
          <Route path="/Tarihce" element={<Tarihce />} />
          <Route path="/Igneler" element={<Igneler />} />
           <Route path="/dashboard" element={<Admin />} />

    {/*       <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          
          <Route path="/admin" element={<BoardAdmin />} /> */}
        </Routes>

      {/* <div className="container mt-3">
        <Routes>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Routes>
      </div> */}

      
    </div>
    // </Router>
  );
}

export default App;