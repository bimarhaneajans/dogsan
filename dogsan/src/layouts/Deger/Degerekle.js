
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DegerServis from "../../services/DegerService";
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
    Content:  "",
    kisaaciklama:  "",
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
          Content:  tutorial.Content,
          kisaaciklama:tutorial.kisaaciklama,
          Resim: tutorial.Resim,
    };

    DegerServis.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          baslik: response.data.baslik,
          Content:  response.data.Content,
          kisaaciklama:response.data.kisaaciklama,
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
              <label htmlFor="Content">Content</label>
              <input
                type="text"
                className="form-control"
                id="Content"
                required
                value={tutorial.Content}
                onChange={handleInputChange}
                name="Content"
              />
            </div>

            <div className="form-group">
              <label htmlFor="kisaaciklama">Kısa Açıklama</label>
              <input
                type="text"
                className="form-control"
                id="kisaaciklama"
                required
                value={tutorial.kisaaciklama}
                onChange={handleInputChange}
                name="kisaaciklama"
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