
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DegerDataService from "../../services/DegerService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";


const Overview = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    baslik: "",
    Ozet: "",
    seolink: "",
    icerik: "",
    published:false
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
    DegerDataService.get(id)
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
        id:currentTutorial.id,
        baslik:currentTutorial.baslik, 
        Ozet:currentTutorial.Ozet,
        seolink:currentTutorial.seolink,
        icerik:currentTutorial.icerik,
        published: status
    };

    DegerDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    DegerDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The Değer was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    DegerDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/degerliste");
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
    <br />
    <div>
      {currentTutorial ? (
        <div className="edit-form">
      
          <form>
            <div className="form-group">
            <label htmlFor="baslik">Başlık </label>
                <input
                  type="text"
                  className="form-control"
                  id="baslik"
                  name="baslik"
                  value={currentTutorial.baslik}
                  onChange={handleInputChange}  
                />
              </div>
              <div className="form-group">
                <label htmlFor="Content">Content </label>
                <input
                  type="text"
                  className="form-control"
                  id="Content"
                  name="Content"
                  value={currentTutorial.Content}
                 onChange={handleInputChange}  
                />
              </div>
               <div className="form-group">
                <label htmlFor="kisaaciklama">Kısa Açıklama </label>
                <input
                  type="text"
                  className="form-control"
                  id="kisaaciklama"
                  name="kisaaciklama"
                  value={currentTutorial.Ozet}
                 onChange={handleInputChange}  
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
          <p>Please click on a Değer...</p>
        </div>
      )}
    </div>
  
    </div>
</DashboardLayout>
);
}

export default Overview;