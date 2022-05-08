
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BlogDataService from "../../services/BlogService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';


const Overview = props => {
  const { id } = useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    baslik: "",
    Ozet: "",
    seolink: "",
    icerik: "",
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
    BlogDataService.get(id)
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
      Ozet: currentTutorial.Ozet,
      seolink: currentTutorial.seolink,
      icerik: currentTutorial.icerik,
      published: status
    };

    BlogDataService.update(currentTutorial.id, data)
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
    BlogDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    BlogDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/blogliste");
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
              <div className="card">
                <br />
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" style={{ width: '100%', height: 150 }} src={currentTutorial.Resim} />
                </div>
                <br />
              </div>
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
                  <label htmlFor="seolink">seolink </label>
                  <input
                    type="text"
                    className="form-control"
                    id="seolink"
                    name="seolink"
                    value={currentTutorial.seolink}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Ozet">Ozet </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Ozet"
                    name="Ozet"
                    value={currentTutorial.Ozet}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="icerik">icerik </label>
                  <input
                    type="text"
                    className="form-control"
                    id="icerik"
                    name="icerik"
                    value={currentTutorial.icerik}
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
              <p>Please click on a Bayi...</p>
            </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Overview;