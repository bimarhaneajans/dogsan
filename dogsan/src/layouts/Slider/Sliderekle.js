
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SliderDataService from "../../services/SliderService";
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

const BayiEkle = () => {
  const initialTutorialState = {
    id: null,
    Baslik: "",
    Resimicerik:"",
    VideoBaslik:"",
     Veritipi:false ,
    url:  "",
    src:"" ,
    VideoBaslik: "",
    published: false
  };
  /*
                 Resimpath:  saveTo ,
                Resimicerik:  users[i].Resimicerik ,
                VideoBaslik:  users[i].VideoBaslik ,
                Veritipi:  users[i].slidetipi ,
                url:  saveTo ,
                Veritipi:   tipi ,
                published:  users[i].published ,
  
  */


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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };


  /*
              id: null,
    Baslik: "",
    Resimicerik:"",
    VideoBaslik:"",
    Veritipi:false ,
    url:  "",
    src:"" ,
    VideoBaslik: "",
    published: false
  */
  const saveTutorial = () => {
    var data = {
      id: tutorial.id,
      Baslik: tutorial.Baslik,
      Veritipi: tutorial.Veritipi,
      Resimicerik: tutorial.Resimicerik, 
      src: tutorial.src,
      VideoBaslik: tutorial.VideoBaslik, 
      url:tutorial.url, 
      //Resim: tutorial.Resim,
    };

    SliderDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          Baslik: response.data.Baslik,
          Veritipi: response.data.Veritipi,
          Resimicerik: response.data.Resimicerik, 
          VideoBaslik: response.data.VideoBaslik, 
          url:response.data.url, 
          src: response.data.src, 
          published:response.data.published
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
                <input
                  type="text"
                  className="form-control"
                  id="Baslik"
                  required
                  value={tutorial.Baslik}
                  onChange={handleInputChange}
                  name="Baslik"
                />
              </div>
           
             
        
        

              <div className="form-group">
                <label htmlFor="Veritipi">Veri tipi</label>
                <input
                  type="radio"
                  className="form-control"
                  id="Veritipi"
                  required
                  value={tutorial.Veritipi}
                  onChange={handleInputChange}
                  name="Veritipi"
                />
              </div>

              
         
              <div className="form-group">
                <label htmlFor="Resimicerik">Resim  icerik</label>
                <input
                  type="text"
                  className="form-control"
                  id="Resimicerik"
                  required
                  value={tutorial.Resimicerik}
                  onChange={handleInputChange}
                  name="Resimicerik"
                />
              </div>

              
        
              <div className="form-group">
                <label htmlFor="VideoBaslik">Video Başlık</label>
                <input
                  type="text"
                  className="form-control"
                  id="VideoBaslik"
                  required
                  value={tutorial.VideoBaslik}
                  onChange={handleInputChange}
                  name="VideoBaslik"
                />
              </div>
           
              <div className="form-group">
                <label htmlFor="VideoBaslik">Video url</label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  required
                  value={tutorial.url}
                  onChange={handleInputChange}
                  name="url"
                />
              </div>

              <div className="form-group">
                <label htmlFor="VideoBaslik">Resim src</label>
                <input
                  type="text"
                  className="form-control"
                  id="src"
                  required
                  value={tutorial.src}
                  onChange={handleInputChange}
                  name="src"
                />
              </div>
              

            {/* <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setTutorial({ ...tutorial, Resim: base64 })}
              />   */}

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