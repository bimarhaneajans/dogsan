
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


import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';


const Duyuruekle = ({ values, setValues }) => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    icerik: "",
    kisaaciklama: "",
    YoutubeVideoURL: "",
    Tarih: "",
    published: false
  };

  const initialValue = 'Alana verileri doldurun';

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
  const [icerik, Changeicerik] = useState(initialValue)
  const [kisaaciklama, Changekisaaciklama] = useState(initialValue)
  const [YoutubeVideoURL, ChangeYoutubeVideoURL] = useState(initialValue)
  const [Tarih, ChangeTarih] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)
  const value = ""; /* RichTextEditor.createEmptyValue(); */


  const handleInputChange = event => {
    const { name, value } = event.target.value;
    setTutorial({ ...tutorial, [name]: value });
    value.toString("html");
  };
  const saveTutorial = () => {
    var data = {
       baslik:JSON.stringify(baslik),
       icerik:JSON.stringify(icerik),
       kisaaciklama:JSON.stringify(kisaaciklama),
       YoutubeVideoURL:JSON.stringify(YoutubeVideoURL),
       Tarih:JSON.stringify(Tarih),  
      /* Resim: tutorial.Resim,
      baslik:tutorial.baslik,
      icerik: tutorial.icerik,
      YoutubeVideoURL: tutorial.YoutubeVideoURL,
      kisaaciklama: tutorial.kisaaciklama,
      Tarih: tutorial.Tarih, */
    };

    DuyuruDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          kisaaciklama: response.data.kisaaciklama,
          YoutubeVideoURL: response.data.YoutubeVideoURL,
          icerik: response.data.icerik,
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
                <RichTextEditor 
                  name="baslik" 
                  id="baslik" 
                  type="string" 
                  style={{ width: "600px" }} 
                  value={baslik.toString("html")} 
                  onChange={Changebaslik} />
              </div>


              {/*       <div className="form-group">
                <label htmlFor="kisaaciklama">kisaaciklama</label>
                <RichTextEditor name="kisaaciklama" id="kisaaciklama" type="text" style={{ width: "600px" }} value={kisaaciklama} onChange={Changekisaaciklama} />

              </div>
              
  
            <div className="form-group">
                <label htmlFor="YoutubeVideoURL">Youtube Video URL</label>
                <RichTextEditor name="YoutubeVideoURL" id="YoutubeVideoURL" type="text" style={{ width: "600px" }} value={YoutubeVideoURL} onChange={ChangeYoutubeVideoURL} />

              </div>
              <div className="form-group">
                <label htmlFor="icerik">icerik</label>
                <RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={icerik} onChange={handleInputChange} />

              </div>
              <div className="form-group">
                <label htmlFor="Tarih">Tarih</label>
                <RichTextEditor name="Tarih" id="Tarih" type="text" style={{ width: "600px" }} value={Tarih} onChange={ChangeTarih} />

              </div> 

            <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setTutorial({ ...tutorial, Resim: base64 })}
              />  
 */}
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