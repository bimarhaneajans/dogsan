
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KategoriDataService from "../../services/KategoriService";

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

const KatagoriEkle = () => {
  const initialTutorialState = { 
    id: null,
    adi: "", 
    uzunisim: "",
    siralama: "",
    seourl: "",
   Resimbaslik: "",
    path: "",
    kategoriid:null,
    subkategori: "",
    videourl: "",
    icerik: "",
    kategoriadi: "",
    Resim: "",  
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


  const [adi, Changeadi] = useState(initialValue)
  const [siralama, Changesiralama] = useState(initialValue)
  const [uzunisim, Changeuzunisim] = useState(initialValue)
  const [seourl, Changeseourl] = useState(initialValue)
  const [Resimbaslik, ChangeResimbaslik] = useState(initialValue)
  const [path, Changepath] = useState(initialValue)
  const [kategoriid, Changekategoriid] = useState(initialValue)
  const [subkategori, Changesubkategori] = useState(initialValue)
  const [videourl, Changevideourl] = useState(initialValue)
  const [icerik, Changeicerik] = useState(initialValue)
  const [kategoriadi, Changekategoriadi] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = { 
      adi:JSON.stringify(adi),
      uzunisim: JSON.stringify(uzunisim),
      siralama:JSON.stringify(siralama),
      seourl: JSON.stringify(seourl),
      Resimbaslik: JSON.stringify(Resimbaslik),
      path: JSON.stringify(path),
      kategoriid: JSON.stringify(kategoriid),
      subkategori: JSON.stringify(subkategori),
      videourl: JSON.stringify(videourl),
      icerik: JSON.stringify(icerik),
      kategoriadi: JSON.stringify(kategoriadi),
      Resim:JSON.stringify(Resim),  
    };

    KategoriDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          adi:response.data.adi,
          uzunisim: response.data.uzunisim,
          siralama: response.data.siralama,
          seourl: response.data.seourl,
          Resimbaslik: response.data.Resimbaslik,
          path: response.data.path,
          kategoriid: response.data.kategoriid,
          subkategori: response.data.subkategori,
          videourl: response.data.videourl,
          icerik: response.data.icerik,
          kategoriadi: response.data.kategoriadi,
          Resim:response.data.Resim,  

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
                <label htmlFor="adi">Adı</label>
                <RichTextEditor name="adi" id="adi" type="text" style={{ width: "600px" }} value={adi} onChange={Changeadi} />
              </div> 

              <div className="form-group">
                <label htmlFor="uzunisim">Uzun İsim</label>
                <RichTextEditor name="uzunisim" id="uzunisim" type="text" style={{ width: "600px" }} value={uzunisim} onChange={Changeuzunisim} />
              </div>
           
              <div className="form-group">
                <label htmlFor="siralama">Sıralama</label>
                <RichTextEditor name="siralama" id="siralama" type="text" style={{ width: "600px" }} value={siralama} onChange={Changesiralama} />
              </div>

              <div className="form-group">
                <label htmlFor="seourl">Seourl</label>
                <RichTextEditor name="seourl" id="seourl" type="text" style={{ width: "600px" }} value={seourl} onChange={Changeseourl} />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriadi">Kategori Adı</label>
                <RichTextEditor name="kategoriadi" id="kategoriadi" type="text" style={{ width: "600px" }} value={kategoriadi} onChange={Changekategoriadi} />
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
                <label htmlFor="subkategori">Sub Kategori</label>
                <RichTextEditor name="subkategori" id="subkategori" type="text" style={{ width: "600px" }} value={subkategori} onChange={Changesubkategori} />
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

export default KatagoriEkle;

/*

1          subkategori: response.data.subkategori,

*/