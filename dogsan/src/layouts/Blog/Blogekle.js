
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BlogDataService from "../../services/BlogService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";

import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    Ozet: "",
    seolink: "",
    icerik: "",
    
    published: false
  };


  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
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
      Ozet: tutorial.Ozet,
      seolink: tutorial.seolink,
      icerik: tutorial.icerik,
      Resim: tutorial.Resim,
    };

    BlogDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik, 
          Ozet: response.data.Ozet,
          seolink: response.data.seolink,
          icerik: response.data.icerik,
          Resimbaslik: response.data.Resimbaslik,
          Resim: response.data.Resim,
           Resim: response.data.Resim,
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
      <Sidenav
        color={sidenavColor}
        brand={brand}
        brandName=" DOĞSAN PANEL "
        routes={routes}
      />
      <div style={{ marginLeft: "100px" }}>
        <Header />
      </div>

      <div style={{ width: "300px", marginLeft: "100px" }}>
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>Başarılı ! Yeniden Eklemek ister misin ?</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="baslik">Başlık</label>
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
                <label htmlFor="Ozet">Ozet</label>
                <input
                  type="text"
                  className="form-control"
                  id="Ozet"
                  required
                  value={tutorial.Ozet}
                  onChange={handleInputChange}
                  name="Ozet"
                />
              </div>
              <div className="form-group">
                <label htmlFor="seo">Seo link</label>
                <input
                  type="text"
                  className="form-control"
                  id="seolink"
                  required
                  value={tutorial.seolink}
                  onChange={handleInputChange}
                  name="seolink"
                />
              </div>
              <div className="form-group">
                <label htmlFor="icerik">icerik</label>
                <input
                  type="text"
                  className="form-control"
                  id="icerik"
                  required
                  value={tutorial.icerik}
                  onChange={handleInputChange}
                  name="icerik"
                />
              </div>

              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setTutorial({ ...tutorial, Resim: base64 })}
              />  

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

export default AddTutorial;