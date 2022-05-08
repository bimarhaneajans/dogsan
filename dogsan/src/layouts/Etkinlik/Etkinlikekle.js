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


const AddTutorial = () => {
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
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
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
      konum: tutorial.konum,
      konumlinki: tutorial.konumlinki,
      baslangicTarihi:tutorial.baslangicTarihi,
      bitisTarihi:tutorial.bitisTarihi,
      Resim: tutorial.Resim,
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
                <label htmlFor="icerik">icerik</label>
                <input
                  type="text"
                  className="form-control"
                  id="icerik"
                  required
                  value={tutorial.icerik}
                  onChange={handleInputChange}
                  name="icerik"
                />
              </div>

            
              <div className="form-group">
                <label htmlFor="konumlinki">konum linki</label>
                <input
                  type="text"
                  className="form-control"
                  id="konumlinki"
                  required
                  value={tutorial.konumlinki}
                  onChange={handleInputChange}
                  name="konumlinki"
                />
              </div>
              <div className="form-group">
                <label htmlFor="konum">konum</label>
                <input
                  type="text"
                  className="form-control"
                  id="konum"
                  required
                  value={tutorial.konum}
                  onChange={handleInputChange}
                  name="konum"
                />
              </div>
              <div className="form-group">
                <label htmlFor="baslangicTarihi">baslangic Tarihi</label>
                <input
                  type="text"
                  className="form-control"
                  id="baslangicTarihi"
                  required
                  value={tutorial.baslangicTarihi}
                  onChange={handleInputChange}
                  name="baslangicTarihi"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bitisTarihi">bitis Tarihi</label>
                <input
                  type="text"
                  className="form-control"
                  id="bitisTarihi"
                  required
                  value={tutorial.bitisTarihi}
                  onChange={handleInputChange}
                  name="bitisTarihi"
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

export default AddTutorial;