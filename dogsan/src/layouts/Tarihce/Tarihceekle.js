
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import TarihceDataService from "../../services/TarihceService";
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

const TarihceEkle = () => {
  const initialTutorialState = {
    id: null,
    Yil: "",
    icerik: "",
    Resim:"",
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

  const [Yil, ChangeYil] = useState(initialValue)
  const [icerik, Changeicerik] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      Yil: JSON.stringify(Yil),
      icerik: JSON.stringify(icerik),
      Resim: tutorial.Resim,
    };

    TarihceDataService.create(data)
      .then(response => {
        setTutorial({

          /*
          Yil: req.body.Yil,
    icerik: req.body.icerik,
    Resimbaslik: req.body.Resimbaslik,
    Resim: req.body.Resim,
          */
          id: response.data.id,
          Yil: response.data.Yil,
          icerik: response.data.icerik,
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
                <label htmlFor="Yil">Yil</label>
                <RichTextEditor name="Yil" id="Yil" type="text" style={{ width: "600px" }} value={Yil} onChange={ChangeYil} />
              </div>

     

              <div className="form-group">
                <label htmlFor="icerik">icerik</label>
                <RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={icerik} onChange={Changeicerik} />
              </div>
               

           {/*  <FileBase64
                type="file"
                multiple={true}
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

export default TarihceEkle;