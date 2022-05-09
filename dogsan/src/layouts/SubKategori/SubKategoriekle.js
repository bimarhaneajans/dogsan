
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SubKategoriDataService from "../../services/SubKategoriService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

const BayiEkle = () => {
  const initialTutorialState = {
    id: null,
    subkategoriadi: "",
    Resim: "",
    tanim: "",
    kullanimamaci: "",
    performansozellikleri: "",
    fayda: "",
    path: "",
    kategoriid: "",
    kategoriadi: "",
    videourl: "",
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

      subkategoriadi: tutorial.subkategoriadi,
      tanim: tutorial.tanim,
      kullanimamaci: tutorial.kullanimamaci,
      performansozellikleri: tutorial.performansozellikleri,
      fayda:tutorial.fayda,
      path:tutorial.path,
      kategoriid: tutorial.kategoriid,
      kategoriadi: tutorial.kategoriadi,
      videourl: tutorial.videourl,
      Resim: tutorial.Resim,
    };

    SubKategoriDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          subkategoriadi: response.data.subkategoriadi,
          tanim: response.data.tanim,
          kullanimamaci: response.data.kullanimamaci,
          performansozellikleri: response.data.performansozellikleri,
          fayda: response.data.fayda,
          path: response.data.path,
          kategoriid: response.data.kategoriid,
          kategoriadi: response.data.kategoriadi,
          videourl: response.data.videourl,
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
              <h4>Başarılı! Yeni eklemek istermisin ?</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Ekle
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="subkategoriadi">subkategoriadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="subkategoriadi"
                  required
                  value={tutorial.subkategoriadi}
                  onChange={handleInputChange}
                  name="subkategoriadi"
                />
                
              </div>



              <div className="form-group">
                <label htmlFor="tanim">tanim</label>
                <input
                  type="text"
                  className="form-control"
                  id="tanim"
                  required
                  value={tutorial.tanim}
                  onChange={handleInputChange}
                  name="tanim"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kullanimamaci">kullanimamaci</label>
                <input
                  type="text"
                  className="form-control"
                  id="kullanimamaci"
                  required
                  value={tutorial.kullanimamaci}
                  onChange={handleInputChange}
                  name="kullanimamaci"
                />
              </div>
              <div className="form-group">
                <label htmlFor="performansozellikleri">performansozellikleri</label>
                <input
                  type="text"
                  className="form-control"
                  id="performansozellikleri"
                  required
                  value={tutorial.performansozellikleri}
                  onChange={handleInputChange}
                  name="performansozellikleri"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fayda">fayda</label>
                <input
                  type="text"
                  className="form-control"
                  id="fayda"
                  required
                  value={tutorial.fayda}
                  onChange={handleInputChange}
                  name="fayda"
                />
              </div>

              <div className="form-group">
                <label htmlFor="path">path</label>
                <input
                  type="text"
                  className="form-control"
                  id="path"
                  required
                  value={tutorial.path}
                  onChange={handleInputChange}
                  name="path"
                />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriid">kategoriid</label>
                <input
                  type="text"
                  className="form-control"
                  id="kategoriid"
                  required
                  value={tutorial.kategoriid}
                  onChange={handleInputChange}
                  name="kategoriid"
                />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriadi">kategoriadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="kategoriadi"
                  required
                  value={tutorial.kategoriadi}
                  onChange={handleInputChange}
                  name="kategoriadi"
                />
              </div>

              <div className="form-group">
                <label htmlFor="videourl">videourl</label>
                <input
                  type="text"
                  className="form-control"
                  id="videourl"
                  required
                  value={tutorial.videourl}
                  onChange={handleInputChange}
                  name="videourl"
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

export default BayiEkle;