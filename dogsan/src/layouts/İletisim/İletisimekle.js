
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

import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';

const IletisimEkle = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    telefon: "",
    haritaurl: "",
    siralama: "",
    Resim:"",
    published: false
  };

  const initialValue = '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
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

  const [baslik, Changebaslik] = useState(initialValue)
  const [adres, Changeadres] = useState(initialValue)
  const [telefon, Changetelefon] = useState(initialValue) 
  const [haritaurl, Changeharitaurl] = useState(initialValue)
  const [siralama, Changesiralama] = useState(initialValue) 
  const [Resim, ChangeResim] = useState(initialValue)
  


  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      baslik: JSON.stringify(baslik),
      adres: JSON.stringify(adres),
      telefon:JSON.stringify(telefon),
      haritaurl: JSON.stringify(haritaurl),
      siralama: JSON.stringify(siralama),
      Resim: JSON.stringify(Resim),
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
                <label htmlFor="bayi">Başlık</label>
                <RichTextEditor name="baslik" id="baslik" type="text" style={{ width: "600px" }} value={baslik} onChange={Changebaslik} />
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
                <label htmlFor="adres">Adres</label>
                <RichTextEditor name="adres" id="adres" type="text" style={{ width: "600px" }} value={adres} onChange={Changeadres} />
              </div>
              <div className="form-group">
                <label htmlFor="Telefon">Telefon</label>
                <RichTextEditor name="telefon" id="telefon" type="text" style={{ width: "600px" }} value={telefon} onChange={Changetelefon} />
              </div>
              <div className="form-group">
                <label htmlFor="haritaurl">Harita Url</label>
                <RichTextEditor name="haritaurl" id="haritaurl" type="text" style={{ width: "600px" }} value={haritaurl} onChange={Changeharitaurl} />
              </div>

              <div className="form-group">
                <label htmlFor="siralama">Sıralama</label>
                <RichTextEditor name="siralama" id="siralama" type="text" style={{ width: "600px" }} value={baslik} onChange={Changesiralama} />
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