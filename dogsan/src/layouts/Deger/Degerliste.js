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
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

const Overview = (props) => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
   const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
 
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;
  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    DegerDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    DegerDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    DegerDataService.findByTitle(searchTitle)
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
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
            brandName=" DO??SAN PANEL "
            routes={routes} 
          />
      <div style={{ marginLeft: "100px" }}>
        <Header />
      </div>

      <div style={{ width: "300px", marginLeft: "275px",marginTop:"20px" }}>
        <br />
        <div className="list row">
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByTitle}
                >
                  Ara
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">


          <ul className="list-group">
              {tutorials &&
                tutorials.map((tutorial, index) => (
                  <li
                    className={
                      "list-group-item " + (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveTutorial(tutorial, index)}
                    key={index}
                  >
                    <div className="card" key={tutorial.id}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" style={{ width: '100%', height: 150 }} src={tutorial.Resim} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{tutorial.baslik}</span>
                    </div>
                </div>
                  </li>
                ))}
            </ul>

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllTutorials}
            >
              T??m??n?? Sil
            </button>
          </div>
          <div className="col-md-6">
            {currentTutorial ? (
              <div>
                <strong>Ba??l??k:</strong>
                <div>
                  <label>

                  </label>{" "}
                  {currentTutorial.baslik}
                </div>
                <strong>Content:</strong>
                <div>
                  <label>

                  </label>{" "}
                  {currentTutorial.Content}
                </div>
                <strong>K??sa A????klama :</strong>
                <div>
                  <label>

                  </label>{" "}
                  {currentTutorial.kisaaciklama}
                </div>
              
                <div>
                  <label>
                    <strong>Durum:</strong>
                  </label>{" "}
                  {currentTutorial.published ? "Published" : "Pending"}
                </div>

                <Link
                  to={"/Degerguncelle/" + currentTutorial.id}
                  className="m-6 btn btn-lm btn-warning"
                >
                  D??zenle
                </Link>
              </div>
            ) : (
              <div>
                <br />
           
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;