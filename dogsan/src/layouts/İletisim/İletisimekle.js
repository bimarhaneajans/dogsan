
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import IletisimDataService from "../../services/IletisimService";
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

const IletisimEkle = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    telefon: "",
    haritaurl: "",
    siralama: "",
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
      adres: tutorial.adres,
      telefon: tutorial.telefon,
      haritaurl: tutorial.haritaurl,
      siralama: tutorial.siralama,
      Resim: tutorial.Resim,
    };

    IletisimDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          adres: response.data.adres,
          telefon: response.data.telefon,
          haritaurl: response.data.haritaurl,
          siralama: response.data.siralama,
          Resimbaslik: response.data.Resimbaslik,
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
                <label htmlFor="bayi">Başlık</label>
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

            {/*   <div style={{ width: "300 px" }}>
                <Editor
                  editorState={tutorial.siralama}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleInputChange}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="adres">adres</label>
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
              <div className="form-group">
                <label htmlFor="Telefon">Telefon</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefon"
                  required
                  value={tutorial.telefon}
                  onChange={handleInputChange}
                  name="telefon"
                />
              </div>
              <div className="form-group">
                <label htmlFor="haritaurl">haritaurl</label>
                <input
                  type="text"
                  className="form-control"
                  id="haritaurl"
                  required
                  value={tutorial.haritaurl}
                  onChange={handleInputChange}
                  name="haritaurl"
                />
              </div>

              <div className="form-group">
                <label htmlFor="siralama">siralama</label>
                <input
                  type="text"
                  className="form-control"
                  id="siralama"
                  required
                  value={tutorial.siralama}
                  onChange={handleInputChange}
                  name="siralama"
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

export default IletisimEkle;