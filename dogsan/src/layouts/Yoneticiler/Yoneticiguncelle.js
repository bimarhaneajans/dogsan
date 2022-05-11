import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import YoneticilerDataService from "../../services/YoneticilerService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

const Bayiguncelle = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
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
 
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;

  const getTutorial = id => {
    YoneticilerDataService.get(id)
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
      enlem: currentTutorial.enlem,
      boylam: currentTutorial.boylam,
      Resim: tutorial.Resim,
      published: status
    };

    YoneticilerDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    YoneticilerDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    YoneticilerDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/yoneticiliste");
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
                <label htmlFor="bayi">yoneticiadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="yoneticiadi"
                  required
                  value={tutorial.yoneticiadi}
                  onChange={handleInputChange}
                  name="yoneticiadi"
                />

              </div>



              <div className="form-group">
                <label htmlFor="adres">yoneticisoyadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="yoneticisoyadi"
                  required
                  value={tutorial.yoneticisoyadi}
                  onChange={handleInputChange}
                  name="yoneticisoyadi"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kariyer">kariyer</label>
                <input
                  type="text"
                  className="form-control"
                  id="kariyer"
                  required
                  value={currentTutorial.kariyer}
                  onChange={handleInputChange}
                  name="kariyer"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pozizyon">pozizyon</label>
                <input
                  type="text"
                  className="form-control"
                  id="pozizyon"
                  required
                  value={currentTutorial.pozizyon}
                  onChange={handleInputChange}
                  name="pozizyon"
                />
              </div>

              <div className="form-group">
                <label htmlFor="twitter">twitter</label>
                <input
                  type="text"
                  className="form-control"
                  id="twitter"
                  required
                  value={currentTutorial.twitter}
                  onChange={handleInputChange}
                  name="twitter"
                />
              </div>
              <div className="form-group">
                <label htmlFor="boylam">facebook</label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  required
                  value={currentTutorial.facebook}
                  onChange={handleInputChange}
                  name="facebook"
                />
              </div>
              <div className="form-group">
                <label htmlFor="boylam">linkedin</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedin"
                  required
                  value={currentTutorial.linkedin}
                  onChange={handleInputChange}
                  name="linkedin"
                />
              </div>
              <div className="form-group">
                <label htmlFor="boylam">googleplus</label>
                <input
                  type="text"
                  className="form-control"
                  id="googleplus"
                  required
                  value={currentTutorial.googleplus}
                  onChange={handleInputChange}
                  name="googleplus"
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
         </div>
      )}
    </div>
  
    </div>
</DashboardLayout>
);
}

export default Bayiguncelle;