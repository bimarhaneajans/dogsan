import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SubKategoriDataService from "../../services/SubKategoriService";
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
  const [currentTutorial, setCurrentTutorial] = useState();
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
    SubKategoriDataService.get(id)
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
      subkategoriadi: currentTutorial.subkategoriadi,
      tanim: currentTutorial.tanim,
      kullanimamaci: currentTutorial.kullanimamaci,
      performansozellikleri: currentTutorial.performansozellikleri,
      fayda:currentTutorial.fayda,
      path:currentTutorial.path,
      kategoriid: currentTutorial.kategoriid,
      kategoriadi: currentTutorial.kategoriadi,
      videourl: currentTutorial.videourl,
      Resim: currentTutorial.Resim,
      published: status
    };

    SubKategoriDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    SubKategoriDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    SubKategoriDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/SubKategoriliste");
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
                <label htmlFor="subkategoriadi">subkategoriadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="subkategoriadi"
                  required
                  value={currentTutorial.subkategoriadi}
                  onChange={handleInputChange}
                  name="subkategoriadi"
                />
                
              </div>



              <div className="form-group">
                <label htmlFor="tanim">tanim</label>
                <input
                  type="text"
                  className="form-control"
                  id="tanim"
                  required
                  value={currentTutorial.tanim}
                  onChange={handleInputChange}
                  name="tanim"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kullanimamaci">kullanimamaci</label>
                <input
                  type="text"
                  className="form-control"
                  id="kullanimamaci"
                  required
                  value={currentTutorial.kullanimamaci}
                  onChange={handleInputChange}
                  name="kullanimamaci"
                />
              </div>
              <div className="form-group">
                <label htmlFor="performansozellikleri">performansozellikleri</label>
                <input
                  type="text"
                  className="form-control"
                  id="performansozellikleri"
                  required
                  value={currentTutorial.performansozellikleri}
                  onChange={handleInputChange}
                  name="performansozellikleri"
                />
              </div>

              <div className="form-group">
                <label htmlFor="fayda">fayda</label>
                <input
                  type="text"
                  className="form-control"
                  id="fayda"
                  required
                  value={currentTutorial.fayda}
                  onChange={handleInputChange}
                  name="fayda"
                />
              </div>

              <div className="form-group">
                <label htmlFor="path">path</label>
                <input
                  type="text"
                  className="form-control"
                  id="path"
                  required
                  value={currentTutorial.path}
                  onChange={handleInputChange}
                  name="path"
                />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriid">kategoriid</label>
                <input
                  type="number"
                  className="form-control"
                  id="kategoriid"
                  required
                  value={currentTutorial.kategoriid}
                  onChange={handleInputChange}
                  name="kategoriid"
                />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriadi">kategoriadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="kategoriadi"
                  required
                  value={currentTutorial.kategoriadi}
                  onChange={handleInputChange}
                  name="kategoriadi"
                />
              </div>

              <div className="form-group">
                <label htmlFor="videourl">videourl</label>
                <input
                  type="text"
                  className="form-control"
                  id="videourl"
                  required
                  value={currentTutorial.videourl}
                  onChange={handleInputChange}
                  name="videourl"
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