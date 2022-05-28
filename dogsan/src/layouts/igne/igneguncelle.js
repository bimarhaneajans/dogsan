
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import IgneDataService from "../../services/IgneService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';

const Overview = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    igneadi:"",
    siralama: "",
    published:false
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
    IgneDataService.get(id)
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
        igneadi: currentTutorial.baslik,
        siralama: currentTutorial.adres,
        
        published: status
    };

    IgneDataService.update(currentTutorial.id, data)
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
    IgneDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    IgneDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/Bayi");
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
            <label htmlFor="igneadi">igneadi </label>
           {/*      <input
                  type="text"
                  className="form-control"
                  id="igneadi"
                  name="igneadi"
                  value={currentTutorial.igneadi}
                  onChange={handleInputChange}  
                /> */}
 <RichTextEditor name="igneadi" id="igneadi" type="text" style={{ width: "600px" }} value={currentTutorial.igneadi} onChange={(igneadi) => handleInputChange({ target: { value: igneadi, name: 'igneadi' } })} />

              </div>
               {/*  <div className="form-group">
                 <label htmlFor="description">siralama </label>
             <input
                  type="text"
                  className="form-control"
                  id="siralama"
                  name="siralama"
                  value={currentTutorial.siralama}
                 onChange={handleInputChange}  
                /> 

              </div>*/}
               

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