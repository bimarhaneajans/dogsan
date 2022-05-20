
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import UrunDataService from "../../services/UrunService";
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

const UrunEkle = () => {
  const initialTutorialState = {
    id: null,
    Adi: "",
    Renk: "",
    icerik: "",
    
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

  const [Adi, ChangeAdi] = useState(initialValue)
  const [Renk, ChangeRenk] = useState(initialValue)
  const [icerik, Changeicerik] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      Adi: JSON.stringify(Adi),
      Renk: JSON.stringify(Renk),
      icerik: JSON.stringify(icerik),
     
      Resim: tutorial.Resim,
    };

    UrunDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          Adi: response.data.Adi,
          Renk: response.data.Renk,
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
                <label htmlFor="Adi">Adı</label>
                <RichTextEditor name="Adi" id="Adi" type="text" style={{ width: "600px" }} value={Adi} onChange={ChangeAdi} />
              </div>

            {/*   <div style={{ width: "300 px" }}>
                <Editor
                  editorState={tutorial.boylam}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleInputChange}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="Renk">Renk</label>
                <RichTextEditor name="Renk" id="Renk" type="text" style={{ width: "600px" }} value={Renk} onChange={ChangeRenk} />
              </div>
              <div className="form-group">
                <label htmlFor="icerik">İçerik</label>
                <RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={icerik} onChange={Changeicerik} />
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

export default UrunEkle;