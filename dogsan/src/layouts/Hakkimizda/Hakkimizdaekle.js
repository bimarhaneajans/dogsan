
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import HakkimizdaDataService from "../../services/HakkimizdaService";
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
    BelgeselBaslik:"",
    AnaBaslik:"",
    AnaIcerik: "",
    BelgeselIcerigi: "",
    BelgeselVideoUrl: "",
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
      BelgeselBaslik:tutorial.BelgeselBaslik,
      AnaBaslik:tutorial.AnaBaslik,
      AnaIcerik: tutorial.AnaIcerik,
      BelgeselIcerigi: tutorial.BelgeselIcerigi,
      BelgeselVideoUrl: tutorial.BelgeselVideoUrl,
      Resim: tutorial.Resim,
    };

    HakkimizdaDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          BelgeselBaslik:response.data.BelgeselBaslik,
          AnaBaslik:response.data.AnaBaslik,
          AnaIcerik: response.data.AnaIcerik,
          BelgeselIcerigi: response.data.BelgeselIcerigi,
          BelgeselVideoUrl: response.data.BelgeselVideoUrl,
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
            /*
             AnaIcerik: tutorial.AnaIcerik,
      BelgeselIcerigi: tutorial.BelgeselIcerigi,
      BelgeselVideoUrl: tutorial.BelgeselVideoUrl,
            */
            <div>
            <div className="form-group">
                <label htmlFor="bayi">Ana Başlık</label>
                <input
                  type="text"
                  className="form-control"
                  id="AnaBaslik"
                  required
                  value={tutorial.AnaBaslik}
                  onChange={handleInputChange}
                  name="AnaBaslik"
                />
              </div> 
              <div className="form-group">
                <label htmlFor="bayi">Ana Icerik</label>
                <input
                  type="text"
                  className="form-control"
                  id="AnaIcerik"
                  required
                  value={tutorial.AnaIcerik}
                  onChange={handleInputChange}
                  name="AnaIcerik"
                />
              </div> 
              <div className="form-group">
                <label htmlFor="BelgeselIcerigi">Belgesel Başlık</label>
                <input
                  type="text"
                  className="form-control"
                  id="BelgeselBaslik"
                  required
                  value={tutorial.BelgeselBaslik}
                  onChange={handleInputChange}
                  name="BelgeselBaslik"
                />
              </div>
              <div className="form-group">
                <label htmlFor="BelgeselIcerigi">BelgeselIcerigi</label>
                <input
                  type="text"
                  className="form-control"
                  id="BelgeselIcerigi"
                  required
                  value={tutorial.BelgeselIcerigi}
                  onChange={handleInputChange}
                  name="BelgeselIcerigi"
                />
              </div>
               
               

              <div className="form-group">
                <label htmlFor="BelgeselVideoUrl">BelgeselVideoUrl</label>
                <input
                  type="text"
                  className="form-control"
                  id="BelgeselVideoUrl"
                  required
                  value={tutorial.BelgeselVideoUrl}
                  onChange={handleInputChange}
                  name="BelgeselVideoUrl"
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