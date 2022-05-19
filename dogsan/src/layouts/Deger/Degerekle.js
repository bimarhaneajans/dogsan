
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DegerServis from "../../services/DegerService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';

const DegerEkle = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    Content:  "",
    kisaaciklama:  "",
    published: false
  };
  const initialValue = '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
   const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;

  const [baslik, Changebaslik] = useState(initialValue)
  const [Content, ChangeContent] = useState(initialValue)
  const [kisaaciklama, Changekisaaciklama] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)

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
          baslik:JSON.stringify(baslik),
          Content:  JSON.stringify(Content),
          kisaaciklama:JSON.stringify(kisaaciklama),
          Resim: JSON.stringify(Resim),
          
    };

    DegerServis.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          Content:  response.data.Content,
          kisaaciklama:response.data.kisaaciklama,
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
      <br />
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
              <label htmlFor="title">Başlık</label>
              <RichTextEditor name="baslik" id="baslik" type="text" style={{ width: "600px" }} value={baslik} onChange={Changebaslik} />
            </div>

            <div className="form-group">
              <label htmlFor="Content">Content</label>
              <RichTextEditor name="Content" id="Content" type="text" style={{ width: "600px" }} value={Content} onChange={ChangeContent} />
            </div>

            <div className="form-group">
              <label htmlFor="kisaaciklama">Kısa Açıklama</label>
              <RichTextEditor name="kisaaciklama" id="kisaaciklama" type="text" style={{ width: "600px" }} value={kisaaciklama} onChange={Changekisaaciklama} />
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

export default DegerEkle;