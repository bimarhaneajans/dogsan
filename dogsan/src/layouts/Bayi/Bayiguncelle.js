import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BayiDataService from "../../services/BayiService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';
const Bayiguncelle = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    sehir: "",
    telefon: "",
    enlem: "",
    boylam: "",
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  
   const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [value, onChange] = useState();

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;

  const getTutorial = id => {
    BayiDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentTutorial.id,
      baslik: currentTutorial.baslik,
      adres: currentTutorial.adres,
      telefon: currentTutorial.telefon,
      sehir: currentTutorial.sehir,
      enlem: currentTutorial.enlem,
      boylam: currentTutorial.boylam,
      Resim: tutorial.Resim,
      published: status
    };

    BayiDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    BayiDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    BayiDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/bayiliste");
      })
      .catch(e => {
        console.log(e);
      });
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
    <div>
      {currentTutorial ? (
        <div className="edit-form">
         
          <form>

          <div className="card">
                  <br/>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" style={{ width: '100%', height: 150 }} src={currentTutorial.Resim} />
                    </div>
                    <br/>
                </div>



          <div className="form-group">
              <label htmlFor="bayi">Başlık</label>
              <input
                type="text"
                className="form-control"
                id="baslik"
                required
                value={currentTutorial.baslik}
                onChange={handleInputChange}
                name="baslik"
              />
                <RichTextEditor value={value} onChange={handleInputChange} />

            </div>

            <div className="form-group">
              <label htmlFor="adres">adres</label>
              <input
                type="text"
                className="form-control"
                id="adres"
                required
                value={currentTutorial.adres}
                onChange={handleInputChange}
                name="adres"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Telefon">Telefon</label>
              <input
                type="text"
                className="form-control"
                id="telefon"
                required
                value={currentTutorial.telefon}
                onChange={handleInputChange}
                name="telefon"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Enlem">Şehir</label>
              <input
                type="text"
                className="form-control"
                id="sehir"
                required
                value={currentTutorial.sehir}
                onChange={handleInputChange}
                name="sehir"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Enlem">Enlem</label>
              <input
                type="text"
                className="form-control"
                id="enlem"
                required
                value={currentTutorial.enlem}
                onChange={handleInputChange}
                name="enlem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="boylam">boylam</label>
              <input
                type="text"
                className="form-control"
                id="boylam"
                required
                value={currentTutorial.boylam}
                onChange={handleInputChange}
                name="boylam"
              />
            </div>
            <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setCurrentTutorial({ ...currentTutorial, Resim: base64 })}
              />  

          
            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  
    </div>
</DashboardLayout>
);
}

export default Bayiguncelle;