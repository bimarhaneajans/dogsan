import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import HakkimizdaDataService from "../../services/HakkimizdaService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

const Overview = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    BelgeselBaslik:"",
    AnaBaslik:"",
    AnaIcerik: "",
    BelgeselIcerigi: "",
    BelgeselVideoUrl: "",
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
    HakkimizdaDataService.get(id)
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
        icerik: currentTutorial.icerik,
        konumlinki: currentTutorial.konumlinki,
        konum: currentTutorial.konum,
        baslangicTarihi: currentTutorial.baslangicTarihi,
        bitisTarihi: currentTutorial.bitisTarihi,
        Resim: currentTutorial.data.Resim,
        published: status
    };

    HakkimizdaDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
        setMessage("Başarılı bir şekilde güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    HakkimizdaDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    HakkimizdaDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/EtkinlikListe");
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
      {currentTutorial ? (
         <div className="edit-form">
         <div className="card">
                   <br />
                   <div className="card-image waves-effect waves-block waves-light">
                     <img className="activator" style={{ width: '100%', height: 150 }} src={currentTutorial.Resim} />
                   </div>
                   <br />
                 </div>
      
          <form>
           
            <div className="form-group">
                <label htmlFor="bayi">Ana Icerik</label>
                <input
                  type="text"
                  className="form-control"
                  id="AnaIcerik"
                  required
                  value={currentTutorial.AnaIcerik}
                  onChange={handleInputChange}
                  name="AnaIcerik"
                />
              </div> 

              <div className="form-group">
                <label htmlFor="BelgeselIcerigi">BelgeselIcerigi</label>
                <input
                  type="text"
                  className="form-control"
                  id="BelgeselIcerigi"
                  required
                  value={currentTutorial.BelgeselIcerigi}
                  onChange={handleInputChange}
                  name="BelgeselIcerigi"
                />
              </div>
               
               

              <div className="form-group">
                <label htmlFor="BelgeselVideoUrl">BelgeselVideoUrl</label>
                <input
                  type="text"
                  className="form-control"
                  id="BelgeselVideoUrl"
                  required
                  value={currentTutorial.BelgeselVideoUrl}
                  onChange={handleInputChange}
                  name="BelgeselVideoUrl"
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
  

</DashboardLayout>
);
}

export default Overview;