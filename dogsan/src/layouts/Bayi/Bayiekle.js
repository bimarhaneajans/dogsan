
import React, { useState } from "react";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import BayiDataService from "../../services/BayiService";
import routes from "routes";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Overview page components
import Header from "layouts/profile/components/Header";
import brand from "assets/images/logo-ct.png";
// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Sidenav from "examples/Sidenav";
import typography from "assets/theme/base/typography";

function Bayiekle() {
  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    telefon: "",
    enlem: "",
    boylam: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      baslik: tutorial.baslik,
      adres: tutorial.adres
    };

    BayiDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          adres: response.data.adres,
          telefon: response.data.telefon,
          enlem: response.data.enlem,
          boylam: response.data.boylam,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <DashboardLayout> 
      <div style={{ marginLeft: "100px" }}> 
        <Header />
      </div>

      <div style={{ width: "300px", marginLeft: "100px" }}>
        <br />
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="baslik"
                  required
                  value={tutorial.baslik}
                  onChange={handleInputChange}
                  name="baslik"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="adres"
                  required
                  value={tutorial.adres}
                  onChange={handleInputChange}
                  name="adres"
                />
              </div>

              <button onClick={saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bayiekle;