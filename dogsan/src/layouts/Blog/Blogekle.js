
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BlogDataService from "../../services/BlogService";
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

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    Ozet: "",
    seolink: "",
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
  const [baslik, Changebaslik] = useState(initialValue)
  const [Ozet, ChangeOzet] = useState(initialValue)
  const [seolink, Changeseolink] = useState(initialValue)
  const [icerik, Changeicerik] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)
  const [published, Changepublished] = useState(initialValue)
  const { size } = typography;

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      baslik:JSON.stringify(baslik),
      Ozet:JSON.stringify(Ozet),
      seolink:JSON.stringify(seolink),
      icerik:JSON.stringify(icerik),
      Resim: tutorial.Resim,
    };

    BlogDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          Ozet: response.data.Ozet,
          seolink: response.data.seolink,
          icerik: response.data.icerik,
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
              <h4>Başarılı ! Yeniden Eklemek ister misin ?</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="baslik">Başlık</label>
                <RichTextEditor name="baslik" id="baslik" type="text" style={{ width: "600px" }} value={baslik} onChange={Changebaslik} />

              </div>

              <div className="form-group">
                <label htmlFor="Ozet">Ozet</label>
                <RichTextEditor name="Ozet" id="Ozet" type="text" style={{ width: "600px" }} value={Ozet} onChange={ChangeOzet} />
              </div>
              <div className="form-group">
                <label htmlFor="seolink">Seo link</label>
                <RichTextEditor name="seolink" id="seolink" type="text" style={{ width: "600px" }} value={Ozet} onChange={Changeseolink} />
              </div>
              <div className="form-group">
                <label htmlFor="icerik">icerik</label>
                <RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={Ozet} onChange={Changeicerik} />
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