
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BayiDataService from "../../services/BayiService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';

const initialValue = 'Alana verileri doldurun';

function BayiEkle() {
  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    telefon: "",
    enlem: "",
    boylam: "",
    sehir: "",
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

  const [baslik, Changebaslik] = useState(initialValue)
  const [adres, Changeadres] = useState(initialValue)
  const [telefon, Changetelefon] = useState(initialValue)
  const [enlem, Changeenlem] = useState(initialValue)
  const [sehir, Changesehir] = useState(initialValue)
  const [boylam, Changeboylam] = useState(initialValue)
  const [Resimbaslik, ChangeResimbaslik] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)
  const [published, Changepublished] = useState(initialValue)
  const { pathname } = useLocation();
  const { size } = typography;
  //  var editor1 = new RichTextEditor("#div_editor1");
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      baslik: JSON.stringify(baslik),
      adres: JSON.stringify(adres),
      telefon: JSON.stringify(telefon),
      enlem: JSON.stringify(enlem),
      sehir: JSON.stringify(sehir),
      boylam: JSON.stringify(boylam),
      Resim: tutorial.Resim,
    };

    BayiDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.id,
          adres: response.data.adres,
          telefon: response.data.telefon,
          enlem: response.data.enlem,
          sehir: response.data.sehir,
          boylam: response.data.boylam,
          Resimbaslik: response.data.Resimbaslik,
          Resim: response.data.Resim,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
        //console.log(value)
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
              <h4>Başarılı ! Yeniden Eklemek ister misin ?</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="bayi">Başlık</label>

               


                <RichTextEditor name="baslik" id="baslik" type="text" style={{ width: "600px" }} value={baslik} onChange={Changebaslik} />
              </div>
              <div className="form-group">
                <label htmlFor="adres">adres</label>

                <RichTextEditor name="adres" id="adres" type="text" style={{ width: "600px" }} value={adres} onChange={Changeadres} />
              </div>
              <div className="form-group">
                <label htmlFor="Telefon">Şehir</label>
                <RichTextEditor name="sehir" id="sehir" type="text" style={{ width: "600px" }} value={sehir} onChange={Changesehir} />
              </div>
              <div className="form-group">
                <label htmlFor="Telefon">Telefon</label>

                <RichTextEditor name="telefon" id="telefon" type="text" style={{ width: "600px" }} value={telefon} onChange={Changetelefon} />
              </div>
              <div className="form-group">
                <label htmlFor="Enlem">Enlem</label>

                <RichTextEditor name="enlem" id="enlem" type="text" style={{ width: "600px" }} value={enlem} onChange={Changeenlem} />
              </div>

              <div className="form-group">
                <label htmlFor="boylam">boylam</label>

                <RichTextEditor name="boylam" id="boylam" type="text" style={{ width: "600px" }} value={boylam} onChange={Changeboylam} />
              </div>

              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setTutorial({ Resim: base64 })}
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