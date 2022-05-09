
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KategoriDataService from "../../services/KategoriService";

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
    adi: "", 
    uzunisim: "",
    siralama: "",
    seourl: "",
   Resimbaslik: "",
    path: "",
    kategoriid: "",
    subkategori: "",
    videourl: "",
    icerik: "",
    kategoriadi: "",
    Resim: "",  
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
      adi:tutorial.adi,
      uzunisim: tutorial.uzunisim,
      siralama: tutorial.siralama,
      seourl: tutorial.seourl,
      Resimbaslik: tutorial.Resimbaslik,
      path: tutorial.path,
      kategoriid: tutorial.kategoriid,
      subkategori: tutorial.subkategori,
      videourl: tutorial.videourl,
      icerik: tutorial.icerik,
      kategoriadi: tutorial.kategoriadi,
      Resim:tutorial.Resim,  
    };

    KategoriDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          adi:response.data.adi,
          uzunisim: response.data.uzunisim,
          siralama: response.data.siralama,
          seourl: response.data.seourl,
          Resimbaslik: response.data.Resimbaslik,
          path: response.data.path,
          kategoriid: response.data.kategoriid,
          subkategori: response.data.subkategori,
          videourl: response.data.videourl,
          icerik: response.data.icerik,
          kategoriadi: response.data.kategoriadi,
          Resim:response.data.Resim,  

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
                <label htmlFor="adi">adi</label>
                <input
                  type="text"
                  className="form-control"
                  id="adi"
                  required
                  value={tutorial.adi}
                  onChange={handleInputChange}
                  name="adi"
                />
              </div> 

              <div className="form-group">
                <label htmlFor="uzunisim">uzunisim</label>
                <input
                  type="text"
                  className="form-control"
                  id="uzunisim"
                  required
                  value={tutorial.uzunisim}
                  onChange={handleInputChange}
                  name="uzunisim"
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

              <div className="form-group">
                <label htmlFor="seourl">seourl</label>
                <input
                  type="text"
                  className="form-control"
                  id="seourl"
                  required
                  value={tutorial.seourl}
                  onChange={handleInputChange}
                  name="seourl"
                />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriadi">kategori adi</label>
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
                <label htmlFor="subkategori">subkategori</label>
                <input
                  type="text"
                  className="form-control"
                  id="subkategori"
                  required
                  value={tutorial.subkategori}
                  onChange={handleInputChange}
                  name="subkategori"
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

/*

1          subkategori: response.data.subkategori,

*/