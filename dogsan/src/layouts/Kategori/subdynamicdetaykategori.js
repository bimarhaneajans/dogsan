
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
import Navbar from 'components/navbar/navbar';


const Subdynamicdetaykategori = (props) => {
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
      <div >
        <Navbar />
        <div className='container'>
          <div id="urunlarbaslık">
            <span></span></div>
          {/* <div style={{ paddingTop: "10px" }} class="main-wrapper">
                    <div style={{ marginTop: "150px" }}> */}
          {tutorials && tutorials.map((tutorial, index) => (
            <div className="active" onClick={() => setActiveTutorial(tutorial, index)}
              key={index}>
              <div id="Group_51">

                <img id="pedesente" style={{ height: "300px", width: "300px" }} src={tutorial.Resim} />

                <div id="TEKTEL_steril_ISO_5832_Blm-1_C">
                  <span>{tutorial.fayda}</span>
                </div>
                <div id="Cerrahi_paslanmaz_elik_tel_yar">
                  <span>{tutorial.performansozellikleri}</span>
                </div>
                <div id="Cerrahi_paslanmaz_elik_tel_emi">
                  <span>{tutorial.kullanimamaci}</span>
                </div>
                <div id="Cerrahi_paslanmaz_elik_tel_yarr">
                  <span>{tutorial.tanim}</span>
                </div>
                <div id="TANIM">
                  <span>TANIM</span>
                </div>
                <div id="KULLANIM_AMACI">
                  <span>KULLANIM AMACI</span>
                </div>
                <div id="KLNK_PERFORMANS_ZELLKLER">
                  <span>KLİNİK PERFORMANS ÖZELLİKLERİ</span>
                </div>
                <div id="KLNK_FAYDAA">
                  <span>KLİNİK FAYDA</span>
                </div>
                <div id="tektel">
                  <span>{tutorial.subkategoriadi}</span>
                </div>
                <svg class="Line_1" viewBox="0 0 412 1">
                  <path id="Line_1" d="M 0 0 L 412 0">
                  </path>
                </svg>
                <svg class="Ellipse_2">
                  <ellipse id="Ellipse_2" rx="7.5" ry="7.5" cx="7.5" cy="7.5">
                  </ellipse>
                </svg>
                <div id="R">
                  <span>R</span>
                </div>
              </div>
            </div>



          ))}

         </div>
         </div>
        </DashboardLayout>
        )
}
        export default Subdynamicdetaykategori;
