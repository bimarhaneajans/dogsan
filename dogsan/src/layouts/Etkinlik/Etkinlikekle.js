import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import EtkinlikService from "../../services/EtkinlikService";
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

const EtkinlikEkle = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    icerik: "",
    konum: "",
    konumlinki: "",
    baslangicTarihi:"",
    bitisTarihi:"",
    published: false
  };

  const initialValue = '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
 
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;

  const [baslik, Changebaslik] = useState(initialValue)
  const [icerik, Changeicerik] = useState(initialValue)
  const [konum,Changekonum] = useState(initialValue) 
  const [konumlinki,Changekonumlinki] = useState(initialValue) 
  const [baslangicTarihi,ChangebaslangicTarihi] = useState(initialValue) 
  const [bitisTarihi,ChangebitisTarihi] = useState(initialValue)
  const [Resim,ChangeResim] = useState(initialValue)



  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {

      baslik: JSON.stringify(baslik),
      icerik:JSON.stringify(icerik),
      konum: JSON.stringify(konum),
      konumlinki: JSON.stringify(konumlinki),
      baslangicTarihi:JSON.stringify(baslangicTarihi),
      bitisTarihi:JSON.stringify(bitisTarihi),
      Resim:JSON.stringify(Resim),
    };

    EtkinlikService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          icerik: response.data.icerik, 
          konum: response.data.konum,
          konumlinki: response.data.konumlinki,
          baslangicTarihi: response.data.baslangicTarihi,
          bitisTarihi: response.data.bitisTarihi,
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
                <label htmlFor="icerik">icerik</label>
                <RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={icerik} onChange={Changeicerik} />

              </div>

            
              <div className="form-group">
                <label htmlFor="konumlinki">konum linki</label>
                <RichTextEditor name="konumlinki" id="konumlinki" type="text" style={{ width: "600px" }} value={konumlinki} onChange={Changekonumlinki} />

              </div>
              <div className="form-group">
                <label htmlFor="konum">konum</label>
                <RichTextEditor name="konum" id="konum" type="text" style={{ width: "600px" }} value={konum} onChange={Changekonum} />

              </div>
              <div className="form-group">
                <label htmlFor="baslangicTarihi">baslangic Tarihi</label>
                <RichTextEditor name="baslangicTarihi" id="baslangicTarihi" type="text" style={{ width: "600px" }} value={konum} onChange={ChangebaslangicTarihi} />

              </div>
              <div className="form-group">
                <label htmlFor="bitisTarihi">bitis Tarihi</label>
                <RichTextEditor name="bitisTarihi" id="bitisTarihi" type="text" style={{ width: "600px" }} value={konum} onChange={ChangebitisTarihi} />

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

export default EtkinlikEkle;