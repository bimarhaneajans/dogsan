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


const Dynamickategori = (props) => {
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
   
      <div className="main-header">
        <div className="sticky-header">
          <div className="container">

          
              <div className="main-navigation hidden-xs">
                <ul className="main-nav list-unstyled list-inline">
                  {tutorials && tutorials.map((tutorial, index) => (
                    <li className="active" onClick={() => setActiveTutorial(tutorial, index)}
                      key={index}><a href={"#"+tutorial.path}>{tutorial.kategoriadi}</a></li>))}
                </ul>
              </div>



              <nav className="navbar navbar-default hidden-sm hidden-md hidden-lg" role="navigation">
                <div className="container-fluid">

                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="collapse navbar-collapse" id="navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      {tutorials && tutorials.map((tutorial, index) => (
                        <li className="active" onClick={() => setActiveTutorial(tutorial, index)}
                          key={index}><a href={tutorial.path}>{tutorial.kategoriadi}</a></li>))}
                    </ul>
                  </div>

                </div>
              </nav>
            </div>
          </div>
        </div>
 


    </DashboardLayout>
  );
};

export default Dynamickategori;




// webservisten gelen kategoriid ile propslear fetch yapiacak .

/*
    {
         adi: String, 
      uzunisim: String, 
      bolumrenkkodu:String, 
      siralama:Number, 
      seourl:String,   
      Resimbaslik:String,
      path:String,
      kategoriid:String,
      subkategori:String,
      title:String,
      image:String,
      videourl:String,
      icerik:String,
      kategoriadi:String,
      Resim:String,
      published: Boolean
    },
 */