/* import Header from "../components/header/header";
import Slider from "../layouts/Slider/slider";
import Navbar from "../components/navbar/navbar";
import NavbarHome from "../components/navbar/NavbarHome";
import Dynamickategori from "./Kategori/dynamickategori";
import Footer from "../components/footer/footer";
import Kvc from "../components/kvc/kvc";
import Kvc2 from "../components/kvc/kvc2";
import EmilebilirSuturler2 from "./EmilebilirSuturler/EmilebilirSuturler2";
import EmilebilirSuturler from "./EmilebilirSuturler/EmilebilirSuturler";
import EmilmeyenSuturler from "./EmilmeyenSuturler/EmilmeyenSuturler";
import EmilmeyenSuturler2 from "./EmilmeyenSuturler/EmilmeyenSuturler2";
import EmilebilirHemostat from "./EmilebilirHemostat/EmilebilirHemostat";
import EmilebilirHemostat2 from "./EmilebilirHemostat/EmilebilirHemostat2";
import DentalSuturler from "./DentalSuturler/DentalSuturler";
import DentalSuturler2 from "./DentalSuturler/DentalSuturler2";
import Veterinerlik from "./Veterinerlik/Veterinerlik";
import Veterinerlik2 from "./Veterinerlik/Veterinerlik2";
import Subdynamickategori from "./Kategori/subdynamickategori"; */
import UserService from "../services/user.service";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Router, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KategoriDataService from "../services/KategoriService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../routes";
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import slidebbg from "./sliderimages/slide-b-bg.jpg";
import silide2 from "../assets/assets/img/slider/slide2.jpg";
import logo from "../layouts/assets/img/logo/heartify-logo.png";
import logo2 from "../layouts/assets/img/logo/heart-icon.png";
import icon1 from "../layouts/assets/img/icons/icon-1.png";
import icon2 from "../layouts/assets/img/icons/icon-2.png";
import icon3 from "../layouts/assets/img/icons/icon-3.png";
import icon4 from "../layouts/assets/img/icons/icon-4.png";
import icon5 from "../layouts/assets/img/icons/s2-ico1.png";
import bir from "../layouts/assets/img/projects/1.jpg";
import iki from "../layouts/assets/img/projects/2.jpg";
import uc from "../layouts/assets/img/projects/3.jpg";
import dort from "../layouts/assets/img/projects/4.jpg";
import bes from "../layouts/assets/img/projects/5.jpg";
import alti from "../layouts/assets/img/projects/6.jpg";
import yedi from "../layouts/assets/img/projects/7.jpg";
import sekiz from "../layouts/assets/img/projects/8.jpg";
import teammember from "../layouts/assets/img/team/team-member1.jpg";
import teammember2 from "../layouts/assets/img/team/team-member2.jpg";
import teammember3 from "../layouts/assets/img/team/team-member3.jpg";
import teammember4 from "../layouts/assets/img/team/team-member4.jpg";
import "../layouts/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../layouts/assets/css/style.css"; // burasi
import "../layouts/assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../layouts/assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "./style.css"
import "./responsive-styling.css"


export default function Home() {
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
    <div className="main-wrapper" >
      <div id="home">
        <div id="bg-slider-home">
          <div id="slider-wrapper">

            <div id="full-slider-wrapper">
              <div id="layerslider" style={{ width: "100 %", height: "720px", maxWidth: "100%", color: "red" }}>
                <div className="ls-slide" data-ls={{ slidedelay: "8000", transition2d: "4" }}>
                  <img src={slidebbg} style={{ width: "120 %", height: "220px", maxWidth: "100%", }} />
                  <img className="ls-l" style={{ top: "230px", left: "690px", whiteSpace: "nowrap" }} data-ls={{ offsetxin: "50", durationin: "2000", delayin: "800", offsetxout: "50", durationout: "1000", parallaxlevel: "1" }} src="sliderimages/ldoctor.png" alt="" />
                  <img className="ls-l" style={{ top: "100px", left: "400px", whiteSpace: "nowrap" }} data-ls={{ offsetxin: "100", durationin: "2000", delayin: "1200", offsetxout: "100", durationout: "1000", parallaxlevel: "3" }} src="sliderimages/gdoctor.png" alt="" />
                  <h6 className="ls-l" style={{ top: "350px", left: "236px", height: "40px", whiteSpace: "nowrap", color: "#0eb2e7", fontSize: ".9em", fontWeight: "bold" }} data-ls={{ durationin: "2000", delayin: "2000", rotatein: "20", rotatexin: "30", scalexin: "1.5", scaleyin: "1.5", transformoriginin: "left 50% 0", durationout: "750", rotateout: "20", rotatexout: "-30", scalexout: "0", scaleyout: "0", transformoriginout: "left 50% 0" }}>
                    Excellence is our speciality
                  </h6>
                  <h2 className="ls-l" style={{
                    top: "370px",
                    left: "110px",
                    textTtransform: "uppercase",
                    fontSize: "3em",
                    marginBbottom: "20px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap"
                  }} data-ls={{
                    offsetxin: "0",
                    durationin: "2000",
                    delayin: "2300",
                    rotateyin: "90",
                    skewxin: "60",
                    transformoriginin: "25% 50% 0",
                    offsetxout: "100",
                    durationout: "750",
                    skewxout: "60"
                  }}>
                    Genius in Healthcare
                  </h2>
                  <p className="ls-l" style={{
                    top: "435.68 px",
                    left: "43.359 px",
                    fontSize: "13.8141 px",
                    padding: "0px 29.6016 px",
                    color: "#6A6A6A",
                    lineHeight: "24.668px",
                    width: "600px",
                    height: "auto",
                    marginLeft: "0px",
                    marginTop: "0px",
                    opacity: "1",
                    visibility: "visible",
                    textAlign: "center"
                  }}
                    data-ls={{
                      durationin: "2000",
                      delayin: "2800",
                      rotatein: "20",
                      rotatexin: "30",
                      scalexin: "1.5",
                      scaleyin: "1.5",
                      transformoriginin: "left 50% 0",
                      durationout: "750",
                      rotateout: "20",
                      rotatexout: "-30",
                      scalexout: "0",
                      scaleyout: "0",
                      transformoriginout: "left 50% 0"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                  </p>
                  <h6 className="ls-l" style={{
                    top: "500.148px",
                    left: "244.359px",
                    color: "#333",
                    fontSize: ".9em",
                    fontWeight: "bold"
                  }}
                    data-ls={{
                      offsetxin: "0",
                      durationin: "2000",
                      delayin: "3200",
                      rotateyin: "90",
                      skewxin: "60",
                      transformoriginin: "25% 50% 0",
                      offsetxout: "100",
                      durationout: "750",
                      skewxout: "60"
                    }}>
                    Prices from <span style={{ fontFamily: "Open Sans", fontSize: "2em", letterSpacing: "0px", color: "#0eb2e7" }}>$50</span> for month
                  </h6>
                </div>
                <div className="ls-slide" data-ls={{ slidedelay: "9500", transition2d: "5", timeshift: "-1500" }}>
                  <img src={silide2} width={300} />
                  <h6 className="ls-l" style={{
                    top: "310px",
                    left: "636px",
                    height: "40px",
                    whiteSpace: "nowrap",
                    color: "#0eb2e7",
                    fontSize: ".9em",
                    fontweight: "bold"
                  }}
                    data-ls={{
                      offsetxin: "50",
                      durationin: "3000",
                      rotateyin: "60",
                      transformoriginin: "right 50% 0",
                      offsetxout: "-50",
                      durationin: "700",
                      delayin: "900",
                      rotateyout: "-60",
                      transformoriginout: "left 50% 0"
                    }}>
                    Excellence is our speciality
                  </h6>
                  <h2 className="ls-l" style={{
                    top: "320px",
                    left: "510px",
                    textTransform: "uppercase",
                    fontSize: "3em",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    whiteSpace: "nowrap"
                  }}
                    data-ls={{
                      offsetxin: "0",
                      durationin: "700",
                      delayin: "1300",
                      rotateyin: "90",
                      skewxin: "60",
                      transformoriginin: "25% 50% 0",
                      offsetxout: "100",
                      durationout: "750",
                      skewxout: "60"
                    }}>
                    Genius in Healthcare
                  </h2>
                  <p className="ls-l" style={{
                    top: "385.68px",
                    left: "443.359px",
                    fontSize: "13.8141px",
                    padding: "0px 29.6016px",
                    color: "#6A6A6A",
                    lineHeight: "24.668px",
                    width: "600px",
                    height: "auto",
                    marginLeft: "0px",
                    marginTop: "0px",
                    opacity: "1",
                    visibility: "visible",
                    textAlign: "center"
                  }}
                    data-ls={{
                      durationin: "900",
                      delayin: "1700",
                      rotatein: "20",
                      rotatexin: "30",
                      scalexin: "1.5",
                      scaleyin: "1.5",
                      transformoriginin: "left 50% 0",
                      durationout: "750",
                      rotateout: "20",
                      rotatexout: "-30",
                      scalexout: "0",
                      scaleyout: "0",
                      transformoriginout: "left 50% 0"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                  </p>
                  <h6 className="ls-l" style={{
                    top: "450.148px",
                    left: "644.359px",
                    color: "#333",
                    fontSize: ".9em",
                    fontWeight: "bold"
                  }}
                    data-ls={{
                      offsetxin: "0",
                      durationin: "1100",
                      delayin: "2000",
                      rotateyin: "90",
                      skewxin: "60",
                      transformoriginin: "25% 50% 0",
                      offsetxout: "100",
                      durationout: "750",
                      skewxout: "60"
                    }}>
                    Prices from <span style={{ fontFamily: "Open Sans", fontSize: "2em", letterSpacing: "0px", color: "#0eb2e7" }}>$50</span> for month
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container bs-main">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
              <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={logo} alt="Heartify" /></a></div>

              <div className="top-header hidden-xs">
                <div className="top-navigation">
                  <ul className="top-nav list-unstyled list-inline">
                    <li className="active"><a href="#home">Kurumsal</a></li>
                    <li><a href="#about">Kataloglar</a></li>
                    <li><a href="#team">İğneler</a></li>
                    <li className="logo"><a href="index.html"><img src={logo} alt="Heartify" /></a></li>
                    <li><a href="#pricing">Duyurular</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">İletişim</a></li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>



        {/* <div className="main-header-dymc">
        <div className="sticky-header">
          <div className="container">
            <div className="main-navigation">
              <ul className="main-nav list-unstyled dynmc-kategori list-inline  " >
                {tutorials && tutorials.map((tutorial, index) => (
                  <li onClick={() => setActiveTutorial(tutorial, index)}
                    key={index}><a href={"#" + tutorial.path}>{tutorial.kategoriadi}</a></li>))}
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
                      <li  onClick={() => setActiveTutorial(tutorial, index) }
                        key={index}><a href={tutorial.path}>{tutorial.kategoriadi}</a></li>
                    ))

                    }
                  </ul>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </div> */}




        <div className="main-header">
          <div className="sticky-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-8 col-sm-4 col-md-4 col-lg-4 pull-left">
                  <div className="main-logo">
                    <a href="index.html"><img className="pull-left" src={logo2} alt="Heartify" /><span>HEARTIFY</span></a>
                  </div>
                </div>
                <div className="col-xs-4 col-sm-8 col-md-8 col-lg-8">
                  <div className="main-navigation hidden-xs">
                    <ul className="main-nav list-unstyled list-inline pull-right">
                      {tutorials && tutorials.map((tutorial, index) => (
                        <li onClick={() => setActiveTutorial(tutorial, index)}
                          key={index}><a href={"#" + tutorial.path}>{tutorial.kategoriadi}</a></li>))}
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
                            <li onClick={() => setActiveTutorial(tutorial, index)}
                              key={index}><a href={"#" + tutorial.path}>{tutorial.kategoriadi}</a></li>))}
                        </ul>
                      </div>

                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                  <h2>Our Mission</h2>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className="information">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon1} alt="icon" />
                      <div className="info-col">
                        <h5>Health Information</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon2} alt="icon" />
                      <div className="info-col">
                        <h5>Medical Education</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon3} alt="icon" />
                      <div className="info-col">
                        <h5>Symptom Check</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon4} alt="icon" />
                      <div className="info-col">
                        <h5>Qualified Doctors</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="job">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <div className="job-stat">
                  <h3>are you looking for job?</h3>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid. Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor incidid. </p>
                </div>
              </div>
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                <a className="btn btn-primary btn-md apply-btn pull-right">Apply for a job</a>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>


        <div className="text-center">
          <h2>Etkinlik Rehberi</h2>
        </div>
        <div className="clearfix" style={{marginBottom: "28px"}}></div>
     

        <div id="services2">
          <div className="container">

            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center services2-info clr1">

                <div className="clearfix"></div>
                <img className="pull-center icon" src={icon5} alt="icon" />
                <div className="info-col">
                  <h5>Etkinlik</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center services2-info clr2">
                <div className="clearfix"></div>
                <img className="pull-center icon" src={icon5} alt="icon" />
                <div className="info-col">
                  <h5>Etkinlik</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center services2-info clr3">
                <div className="clearfix"></div>
                <img className="pull-center icon" src={icon5} alt="icon" />
                <div className="info-col">
                  <h5>Etkinlik</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        {/*<div id="services3">
          <div className="services-info3">
            <div className="container">
              <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                <h2>Online Patient Panel</h2>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>
              <div className="bottom-space-50"></div>
              <img src="assets/img/1.png" className="img-responsive" alt="" />
              <div className="clearfix"></div>
            </div>
          </div> 
        </div>*/}

        {/*     <div id="services">
          <div className="services-info s2-info">
            <div className="container">
              <div className="row bottom-space-50">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src="assets/img/icons/icon-1.png" alt="icon" />
                  <div className="info-col">
                    <h5>call center 24/7</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src="assets/img/icons/icon-5.png" alt="icon" />
                  <div className="info-col">
                    <h5>best specialist</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src="assets/img/icons/icon-6.png" alt="icon" />
                  <div className="info-col">
                    <h5>modern clinic</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                  </div>
                </div>
              </div>
              <div className="row bottom-space-50">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src="assets/img/icons/icon-4.png" alt="icon" />
                  <div className="info-col">
                    <h5>highest quality</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src="assets/img/icons/icon-7.png" alt="icon" />
                  <div className="info-col">
                    <h5>Health Information</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src="assets/img/icons/icon-8.png" alt="icon" />
                  <div className="info-col">
                    <h5>treatment healthy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}


        <section class="client-div">
          <div class="container">
            <div class="row">
              <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                <div class="client-stat text-center">
                  <h3>Our Happy Clients</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div id="team">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-md-offset-2">
                <div className="team-stat text-center">
                  <h2>Meet Them All</h2>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                {/*    <div className="team-filter-nav text-center">
                  <ul id="filters" className="filter-nav list-inline list-unstyled">
                    <li><a data-filter="*" className="current" href="#">All</a></li>
                    <li><a data-filter=".general" href="#">General</a></li>
                    <li><a data-filter=".specialist" href="#">Specialist</a></li>
                    <li><a data-filter=".laboratory" href="#">Laboratory</a></li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="row">
              <div id="container" className="container team-detail">
                <div className="item general col-md-6">
                  <div className="team-member">
                    <a data-toggle="modal" data-target="#myModal">
                      <div className="team-img">
                        <img src={teammember} className="img-responsive" alt="" />
                      </div>
                    </a>
                    <div className="member-details">
                      <h6>clinic Manager</h6>
                      <h4>Frank Rooney</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                      <div className="member-social">
                        <h6>Social Profiles</h6>
                        <ul className="list-inline list-unstyled pull-right social">
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item laboratory col-md-6">
                  <div className="team-member">
                    <a data-toggle="modal" data-target="#myModal">
                      <div className="team-img">
                        <img src={teammember2} className="img-responsive" />
                      </div>
                    </a>
                    <div className="member-details">
                      <h6>clinic Manager</h6>
                      <h4>Frank Rooney</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                      <div className="member-social">
                        <h6>Social Profiles</h6>
                        <ul className="list-inline list-unstyled pull-right social">
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item specialist col-md-6">
                  <div className="team-member">
                    <a data-toggle="modal" data-target="#myModal">
                      <div className="team-img">
                        <img src={teammember3} className="img-responsive" alt="" />
                      </div>
                    </a>
                    <div className="member-details">
                      <h6>clinic Manager</h6>
                      <h4>Frank Rooney</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                      <div className="member-social">
                        <h6>Social Profiles</h6>
                        <ul className="list-inline list-unstyled pull-right social">
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item laboratory col-md-6">
                  <div className="team-member">
                    <a data-toggle="modal" data-target="#myModal">
                      <div className="team-img">
                        <img src={teammember4} className="img-responsive" alt="" />
                      </div>
                    </a>
                    <div className="member-details">
                      <h6>clinic Manager</h6>
                      <h4>Frank Rooney</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                      <div className="member-social">
                        <h6>Social Profiles</h6>
                        <ul className="list-inline list-unstyled pull-right social">
                          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                          <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/*  <div className="pagination-div">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                      <p className="pull-left">Showing <span>1-4</span> of 16 doctors</p>
                      <ul className="pagination pull-right">
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">&raquo;</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>


        <section id="projects">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <div class="blog-stat text-center">
                  <h2>Our latest Projects</h2>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="bottom-space-50"></div>
              <ul class="projects-wrap">
                <li>
                  <img src={bir} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={iki} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={uc} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={dort} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={bes} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={alti} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={yedi} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
                <li>
                  <img src={sekiz} class="img-responsive" alt="" />
                  <div class="overlay">
                    <div class="overlay-inner">
                      <h4>Clinic office <span>Durning work</span></h4>
                      <span class="comments">30 comments</span>
                      <a href="#">View more</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="clearfix"></div>



        <div id="doctor-info">
          <div className="container">
            {/* <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <div className="blog-stat text-center">
                  <h2>Visit to the doctor</h2>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
            </div> */}
            {/*  <div className="row">
            <div className="col-md-5">
              <form className="appointment-form">
                <h4>Appointments form</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                <label>NAME AND SURNAME</label>
                <input type="text" placeholder="Enter your name and surname">
                  <label>CONTACT PHONE NUMBER</label>
                  <input type="text" placeholder="Enter phone number">
                    <label>PATIENT NUMBER</label>
                    <input type="text" placeholder="Enter patient number">
                      <div className="row">
                        <div className="col-md-6">
                          <label>DATE FROM</label>
                          <div className='input-group date'>
                            <input type='text' className="form-control" placeholder="30.01.2013" />
                            <span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span></span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label>DATE TO</label>
                          <div className='input-group date'>
                            <input type='text' className="form-control" placeholder="30.01.2013" />
                            <span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span></span>
                          </div>
                        </div>
                      </div>
                      <div className="space20"></div>
                      <label>HOURLY PREFERENCES</label>
                      <ul className="hpref">
                        <li className="active"><a>Morning</a></li>
                        <li><a>Lunch</a></li>
                        <li><a>Evening</a></li>
                      </ul>
                      <div className="space20"></div>
                      <div className="clearfix"></div>
                      <div className="space20"></div>
                      <div className="submit-wrap row">
                        <div className="col-md-7 cbox">
                          <input type="checkbox" /><span>send me copy of message</span>
                        </div>
                        <div className="col-md-5">
                          <button type="submit">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 services-info">
                        <img className="pull-left icon" src="assets/img/icons/icon-1.png" alt="icon" />
                        <div className="info-col">
                          <h5>call center 24/7</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 services-info">
                        <img className="pull-left icon" src="assets/img/icons/icon-5.png" alt="icon" />
                        <div className="info-col">
                          <h5>best specialist</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 services-info">
                        <img className="pull-left icon" src="assets/img/icons/icon-6.png" alt="icon" />
                        <div className="info-col">
                          <h5>modern clinic</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 services-info">
                        <img className="pull-left icon" src="assets/img/icons/icon-6.png" alt="icon" />
                        <div className="info-col">
                          <h5>modern clinic</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                  </div>
                </div>
            </div>
          </div> 
            <div id="services4" className="services4">
               <div className="service-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                      <div className="services-stat text-center">
                        <h2>Services we offer</h2>
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <img className="polygon" src="assets/img/general/polygon.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> 

               <div className="clearfix"></div>
              <div className="bottom-space-50"></div>
              <div className="clearfix"></div>
              <div className="bottom-space-50"></div>
              <div className="services-info">
                <div className="container">
                  <div className="col-md-6 no-padding service2-right s2-right">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="pull-right icon" src="assets/img/icons/icon-1.png" alt="icon" />
                        <div className="info-col">
                          <h5>call center 24/7</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="bottom-space-50"></div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="pull-right icon" src="assets/img/icons/icon-5.png" alt="icon" />
                        <div className="info-col">
                          <h5>best specialist</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="bottom-space-50"></div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="pull-right icon" src="assets/img/icons/icon-6.png" alt="icon" />
                        <div className="info-col">
                          <h5>modern clinic</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 no-padding s2-info">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="pull-left icon" src="assets/img/icons/icon-4.png" alt="icon" />
                        <div className="info-col ">
                          <h5>highest quality</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="bottom-space-50"></div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="pull-left icon" src="assets/img/icons/icon-7.png" alt="icon" />
                        <div className="info-col">
                          <h5>Health Information</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <div className="bottom-space-50"></div>
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <img className="pull-left icon" src="assets/img/icons/icon-8.png" alt="icon" />
                        <div className="info-col">
                          <h5>treatment healthy</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="bottom-space-50"></div>
            </div> */}
            <div id="blog">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                    <div className="blog-stat text-center">
                      <h2>From the blog</h2>
                      <h5>Lorem ipsum dolor sit amet</h5>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                  </div>
                  <div id="blog-posts">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="blog-post">
                        <div className="post-img">
                          <img src="assets/img/blog/post-img1.jpg" className="img-responsive" alt="" />
                          <img className="ab-icon" src="assets/img/blog/post-icon.png" alt="" />
                        </div>
                        <div className="info-col">
                          <a href="./single_post.html">
                            <h5>This is a Standard post format with preview picture</h5>
                          </a>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                        <ul className="list-inline list-unstyled post-nav">
                          <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                          <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="blog-post">
                        <div className="post-img">
                          <img src="assets/img/blog/post-img2.jpg" className="img-responsive" alt="" />
                          <img className="ab-icon" src="assets/img/blog/post-icon.png" alt="" />
                        </div>
                        <div className="info-col">
                          <a href="./single_post.html">
                            <h5>This is a Standard post format with preview picture</h5>
                          </a>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                        <ul className="list-inline list-unstyled post-nav">
                          <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                          <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="blog-post">
                        <div className="post-img">
                          <img src="assets/img/blog/post-img3.jpg" className="img-responsive" alt="" />
                          <img className="ab-icon" src="assets/img/blog/post-icon.png" alt="" />
                        </div>
                        <div className="info-col">
                          <a href="./single_post.html">
                            <h5>This is a Standard post format with preview picture</h5>
                          </a>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        </div>
                        <ul className="list-inline list-unstyled post-nav">
                          <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                          <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="clearfix"></div>

            {/* <div id="twitter-feed">
              <div className="video-bg-overlay"></div>
              <div className="video-bg">

                <div className="video-container1">
                  <iframe src="http://player.vimeo.com/video/96635299?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1" width="100" height="300"></iframe>
                </div>

              </div>
               <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 text-center">
                    <div className="tweet-div">
                      <h2>Latest Tweets</h2>
                      <h5>Check out our twitter</h5>
                      <div id="tweet-slider" className="twitter-icon owl-carousel owl-theme">
                        <div className="item">
                          <i className="icon-twitter icon-2x"></i>
                          <p className="lead">We are hiring! Calling all Ninjas, Rockstars and .... Clerics.<a href=""><u>enva.to/1pGuRf3</u></a></p>
                          <div className="author-name">
                            <p>Dominic Monaghan</p>
                          </div>
                        </div>
                        <div className="item">
                          <i className="icon-twitter icon-2x"></i>
                          <p className="lead">We are hiring! Calling all Ninjas, Rockstars and .... Clerics.<a href=""><u>enva.to/1pGuRf3</u></a></p>
                          <div className="author-name">
                            <p>Dominic Monaghan</p>
                          </div>
                        </div>
                        <div className="item">
                          <i className="icon-twitter icon-2x"></i>
                          <p className="lead">We are hiring! Calling all Ninjas, Rockstars and .... Clerics.<a href=""><u>enva.to/1pGuRf3</u></a></p>
                          <div className="author-name">
                            <p>Dominic Monaghan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>*/}
            <div id="contact">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="contact-stat text-center">
                      <h2>Contact Form</h2>
                      <h5>Lorem ipsum dolor sit amet</h5>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="row">
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="info-col text-center">
                          <h4>Phone Number</h4>
                          <p className="contact-time">Monday - Friday 10:00 am - 10:00 pm</p>
                          <p className="phone">+48 987 654 321</p>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="info-col text-center">
                          <h4>Clinic Address</h4>
                          <p className="clinic-add">The Ronins Clinic<br />Suit 109,200 Broadway Avenue West Beach SA 5024, Australia</p>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="info-col text-center">
                          <h4>Email Address</h4>
                          <p className="contact-email">We are happy to answer any questions</p>
                          <p className="email"><a href="mailto:contact@theronins.com">contact@theronins.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div id="g-map">
              <div id="map"></div>
             <div className="row">
                <div className="container">
                  <div className="col-md-6">
                    <div className="app-form">
                      <form className="appointment-form">
                        <h4>Appointments form</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                        <label>NAME AND SURNAME</label>
                        <input type="text" placeholder="Enter your name and surname" />
                        <label>EMAIL ADDRESS</label>
                        <input type="text" placeholder="Enter email address" />
                        <label>MESSAGE</label>
                        <textarea rows="10" placeholder="Enter your message"></textarea>
                        <div className="submit-wrap row">
                          <div className="col-md-7 cbox">
                            <input type="checkbox" /><span>send me copy of message</span>
                          </div>
                          <div className="col-md-5">
                            <button type="submit">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> 
            </div>*/}


            <div className="footer2">
              <img src="assets/img/logo/heartify-logo-lite.png" alt="" />
            </div>


            <div className="footer2-bottom">
              <div className="container">
                <div className="col-md-6">
                  <p>Copyright 2014. <b>HEARTIFY</b>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6">
                  <ul className="footer-social">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
                <a href="javascript:void(0)" className="bttop"><img src="assets/img/backtotop.jpg" alt="" /></a>
              </div>
            </div>


          </div>
        </div>



        <div className="modal fade" id="myModal" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-6 no-padding">
                      <img src="assets/img/team/1.png" className="img-responsive" alt="" />
                    </div>
                    <div className="col-md-6 team-pop-info">
                      <button data-dismiss="modal" className="m-close"></button>
                      <h4><span>Clinic manager</span> Frank Rooney</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adi pisicing elit, sed do eiusmod. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <ul className="tp-meta">
                        <li><span>Phone Number</span> <em>+40 987 654 321</em></li>
                        <li><span>Email Address</span> <em>contact@theronins.com</em></li>
                        <li><span>Place of work</span> <em>Heartify Clinic in Chicago</em></li>
                        <li><span>Responsibilities</span> <em>Head of orthopedics</em></li>
                      </ul>
                      <div className="row">
                        <div className="tp-social">
                          <div className="col-md-6 no-padding">
                            <span>Social Profiles</span>
                          </div>
                          <div className="col-md-6 no-padding">
                            <ul>
                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="#"><i className="fa fa-skype"></i></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            -
          </div>

        </div>

      </div>

    </div>
  )
}

