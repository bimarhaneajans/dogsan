
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
 import KategoriDataService from "../../services/KategoriService";

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
    adi: "", 
    uzunisim: "",
    siralama: "",
    seourl: "",
   Resimbaslik: "",
    path: "",
    kategoriid: "",
    subkategori: "",
    videourl: "",
    icerik: "",
    kategoriadi: "",
    Resim: "",  
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
  

/*   const getTutorial = id => {
    KategoriDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);
 */
  const getTutorial = id => {
    KategoriDataService.get(id)
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
        adi:currentTutorial.adi,
        uzunisim: currentTutorial.uzunisim,
        siralama: currentTutorial.siralama,
        seourl: currentTutorial.seourl,
        Resimbaslik: currentTutorial.Resimbaslik,
        path: currentTutorial.path,
        kategoriid: currentTutorial.kategoriid,
        subkategori: currentTutorial.subkategori,
        videourl: currentTutorial.videourl,
        icerik: currentTutorial.icerik,
        kategoriadi: currentTutorial.kategoriadi,
        Resim:currentTutorial.Resim,  
        published: status
    };

    KategoriDataService.update(currentTutorial.id, data)
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
    KategoriDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    KategoriDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/Kategoriliste");
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
                <label htmlFor="adi">adi</label>
                <input
                  type="text"
                  className="form-control"
                  id="adi"
                  required
                  value={currentTutorial.adi}
                  onChange={handleInputChange}
                  name="adi"
                />
              </div> 

              <div className="form-group">
                <label htmlFor="uzunisim">uzunisim</label>
                <input
                  type="text"
                  className="form-control"
                  id="uzunisim"
                  required
                  value={currentTutorial.uzunisim}
                  onChange={handleInputChange}
                  name="uzunisim"
                />
              </div>
           
              <div className="form-group">
                <label htmlFor="siralama">siralama</label>
                <input
                  type="text"
                  className="form-control"
                  id="siralama"
                  required
                  value={currentTutorial.siralama}
                  onChange={handleInputChange}
                  name="siralama"
                />
              </div>

              <div className="form-group">
                <label htmlFor="seourl">seourl</label>
                <input
                  type="text"
                  className="form-control"
                  id="seourl"
                  required
                  value={currentTutorial.seourl}
                  onChange={handleInputChange}
                  name="seourl"
                />
              </div>

              <div className="form-group">
                <label htmlFor="kategoriadi">kategori adi</label>
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
                  type="text"
                  className="form-control"
                  id="kategoriid"
                  required
                  value={currentTutorial.kategoriid}
                  onChange={handleInputChange}
                  name="kategoriid"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subkategori">subkategori</label>
                <input
                  type="text"
                  className="form-control"
                  id="subkategori"
                  required
                  value={currentTutorial.subkategori}
                  onChange={handleInputChange}
                  name="subkategori"
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

export default Overview;