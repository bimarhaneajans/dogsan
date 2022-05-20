
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
import { RichTextEditor } from '@mantine/rte';

const Hakkımızda = () => {
  const initialTutorialState = {
    id: null,
    BelgeselBaslik: "",
    AnaBaslik: "",
    AnaIcerik: "",
    BelgeselIcerigi: "",
    BelgeselVideoUrl: "",
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

  const [BelgeselBaslik, ChangeBelgeselBaslik] = useState(initialValue)
  const [AnaBaslik, ChangeAnaBaslik] = useState(initialValue)
  const [AnaIcerik, ChangeAnaIcerik] = useState(initialValue)
  const [BelgeselIcerigi, ChangeBelgeselIcerigi] = useState(initialValue)
  const [baslangicTarihi, ChangebaslangicTarihi] = useState(initialValue)
  const [BelgeselVideoUrl, ChangeBelgeselVideoUrl] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      BelgeselBaslik: JSON.stringify(BelgeselBaslik),
      AnaBaslik: JSON.stringify(AnaBaslik),
      AnaIcerik: JSON.stringify(AnaIcerik),
      BelgeselIcerigi: JSON.stringify(BelgeselIcerigi),
      BelgeselVideoUrl: JSON.stringify(BelgeselVideoUrl),
      Resim: JSON.stringify(Resim),
    };

    HakkimizdaDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          BelgeselBaslik: response.data.BelgeselBaslik,
          AnaBaslik: response.data.AnaBaslik,
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
           
            <div>
              <div className="form-group">
                <label htmlFor="bayi">Ana Başlık</label>


                <RichTextEditor name="AnaBaslik" id="AnaBaslik" type="text" style={{ width: "600px" }} value={AnaBaslik} onChange={ChangeAnaBaslik} />
              </div>
              <div className="form-group">
                <label htmlFor="bayi">Ana Icerik</label>

                <RichTextEditor name="AnaIcerik" id="AnaIcerik" type="text" style={{ width: "600px" }} value={AnaIcerik} onChange={ChangeAnaIcerik} />

              </div>
              <div className="form-group">
                <label htmlFor="BelgeselIcerigi">Belgesel Başlık</label>


                <RichTextEditor name="BelgeselBaslik" id="BelgeselBaslik" type="text" style={{ width: "600px" }} value={BelgeselBaslik} onChange={ChangeBelgeselBaslik} />

              </div>
              <div className="form-group">
                <label htmlFor="BelgeselIcerigi">BelgeselIcerigi</label>
             

                <RichTextEditor name="BelgeselIcerigi" id="BelgeselIcerigi" type="text" style={{ width: "600px" }} value={BelgeselIcerigi} onChange={ChangeBelgeselIcerigi} />

              </div>



              <div className="form-group">
                <label htmlFor="BelgeselVideoUrl">BelgeselVideoUrl</label>


                <RichTextEditor name="BelgeselVideoUrl" id="BelgeselVideoUrl" type="text" style={{ width: "600px" }} value={BelgeselVideoUrl} onChange={ChangeBelgeselVideoUrl} />

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

export default Hakkımızda;