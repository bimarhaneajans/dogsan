
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SubKategoriDataService from "../../services/SubKategoriService";
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

const SubKategoriEkle = () => {
  const initialTutorialState = {
    id: null,
    subkategoriadi: "",
    Resim: "",
    tanim: "",
    kullanimamaci: "",
    performansozellikleri: "",
    fayda: "",
    path: "",
    kategoriid: null,
    kategoriadi: "",
    videourl: "",
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

  const [subkategoriadi, Changesubkategoriadi] = useState(initialValue)
  const [tanim, Changetanim] = useState(initialValue)
  const [kullanimamaci, Changekullanimamaci] = useState(initialValue)
  const [performansozellikleri, Changeperformansozellikleri] = useState(initialValue)
  const [fayda, Changefayda] = useState(initialValue)
  const [path, Changepath] = useState(initialValue)
  const [kategoriid, Changekategoriid] = useState(initialValue)
  const [videourl, Changevideourl] = useState(initialValue)
  const [kategoriadi, Changekategoriadi] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {

      subkategoriadi: JSON.stringify(subkategoriadi),
      tanim: JSON.stringify(tanim),
      kullanimamaci: JSON.stringify(kullanimamaci),
      performansozellikleri: JSON.stringify(performansozellikleri),
      fayda:JSON.stringify(fayda),
      path:JSON.stringify(path),
      kategoriid: JSON.stringify(kategoriid),
      kategoriadi: JSON.stringify(kategoriadi),
      videourl: JSON.stringify(videourl),
      Resim: JSON.stringify(Resim),
    };

    SubKategoriDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          subkategoriadi: response.data.subkategoriadi,
          tanim: response.data.tanim,
          kullanimamaci: response.data.kullanimamaci,
          performansozellikleri: response.data.performansozellikleri,
          fayda: response.data.fayda,
          path: response.data.path,
          kategoriid: response.data.kategoriid,
          kategoriadi: response.data.kategoriadi,
          videourl: response.data.videourl,
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
                <label htmlFor="subkategoriadi">Sub Kategori Adı</label>
                <RichTextEditor name="subkategoriadi" id="subkategoriadi" type="text" style={{ width: "600px" }} value={subkategoriadi} onChange={Changesubkategoriadi} />
              </div>



              <div className="form-group">
                <label htmlFor="tanim">Tanım</label>
                <RichTextEditor name="tanim" id="tanim" type="text" style={{ width: "600px" }} value={tanim} onChange={Changetanim} />
              </div>
              <div className="form-group">
                <label htmlFor="kullanimamaci">Kullanım Amacı</label>
                <RichTextEditor name="kullanimamaci" id="kullanimamaci" type="text" style={{ width: "600px" }} value={kullanimamaci} onChange={Changekullanimamaci} />
              </div>
              <div className="form-group">
                <label htmlFor="performansozellikleri">Performans Özellikleri</label>
                <RichTextEditor name="performansozellikleri" id="performansozellikleri" type="text" style={{ width: "600px" }} value={performansozellikleri} onChange={Changeperformansozellikleri} />
              </div>

              <div className="form-group">
                <label htmlFor="fayda">Fayda</label>
                <RichTextEditor name="fayda" id="fayda" type="text" style={{ width: "600px" }} value={fayda} onChange={Changefayda} />
              </div>

              <div className="form-group">
                <label htmlFor="path">path</label>
                <RichTextEditor name="path" id="path" type="text" style={{ width: "600px" }} value={path} onChange={Changepath} />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriid">Kategori İd</label>
                <RichTextEditor name="kategoriid" id="kategoriid" type="text" style={{ width: "600px" }} value={kategoriid} onChange={Changekategoriid} />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriadi">Kategori Adı</label>
                <RichTextEditor name="kategoriadi" id="kategoriadi" type="text" style={{ width: "600px" }} value={kategoriadi} onChange={Changekategoriadi} />
              </div>

              <div className="form-group">
                <label htmlFor="videourl">videourl</label>
                <input
                  type="text"
                  className="form-control"
                  id="videourl"
                  required
                  value={tutorial.videourl}
                  onChange={handleInputChange}
                  name="videourl"
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

export default SubKategoriEkle;