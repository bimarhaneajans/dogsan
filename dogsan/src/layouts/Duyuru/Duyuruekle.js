
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DuyuruDataService from "../../services/DuyuruService";
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

const Duyuruekle = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    icerik: "",
    kisaaciklama: "",
    YoutubeVideoURL: "",
    Tarih: "",
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
      icerik: tutorial.icerik,
      kisaaciklama: tutorial.kisaaciklama,
      YoutubeVideoURL: tutorial.YoutubeVideoURL,
      Tarih: tutorial.Tarih,
      Resim: tutorial.Resim,
    };

    DuyuruDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          kisaaciklama: response.data.kisaaciklama,
          YoutubeVideoURL: response.data.YoutubeVideoURL,
          Tarih: response.data.Tarih,
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
        

              <div className="form-group">
                <label htmlFor="kisaaciklama">kisaaciklama</label>
                <input
                  type="text"
                  className="form-control"
                  id="kisaaciklama"
                  required
                  value={tutorial.kisaaciklama}
                  onChange={handleInputChange}
                  name="kisaaciklama"
                />
              </div>
              
  
            <div className="form-group">
                <label htmlFor="Telefon">Youtube Video URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="YoutubeVideoURL"
                  required
                  value={tutorial.YoutubeVideoURL}
                  onChange={handleInputChange}
                  name="YoutubeVideoURL"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Tarih">Tarih</label>
                <input
                  type="text"
                  className="form-control"
                  id="Tarih"
                  required
                  value={tutorial.Tarih}
                  onChange={handleInputChange}
                  name="Tarih"
                />
              </div>
            {/*  <div className="form-group">
                <label htmlFor="Enlem">Tarih</label>
                <input
                  type="text"
                  className="form-control"
                  id="Tarih"
                  required
                  value={tutorial.Tarih}
                  onChange={handleInputChange}
                  name="Tarih"
                />
              </div>   */}

            

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

export default Duyuruekle;