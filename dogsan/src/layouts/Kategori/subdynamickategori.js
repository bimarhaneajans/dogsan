
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KategoriDataService from "../../services/KategoriService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';


const Subdynamickategori = (props) => {
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



  const retrieveTutorials = () => {
    KategoriDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };



  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };





  return (
    <DashboardLayout>

    <div>
      <section id="about" className="about">
                <div className="container">
                {tutorials &&  tutorials.map((tutorial, index) => (
                    <div className="active" onClick={() => setActiveTutorial(tutorial, index)}
                      key={index}>
                      <div className="row" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <h2>{tutorial.kategoriadi}</h2>

                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={tutorial.Resim} alt="icon" />
                                 <div className="info-col">
                                    <h5>{tutorial.subkategoriadi}</h5>
                                    <h7>Tanım</h7>
                                    <p className="lead">{tutorial.tanim}</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row pull-center" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <Link className="btn btn-pink pull-center"
                                    role="button" to={"/subdynamicdetaykategori/"+tutorial.kategoriid} >Tümünü Göster</Link>
                            </div>

                        </div>
                    </div>
                      
                      </div>
                      

                    ))}
                   
                  
                </div></section></div>
                </DashboardLayout>
  )
}
export default Subdynamickategori;
 