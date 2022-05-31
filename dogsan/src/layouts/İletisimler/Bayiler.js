

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "../../assets/theme/base/typography";
import BayiDataService from "../../services/BayiService";
import SehirDataService from "../../services/SehirService";
import logo from "../assets/img/logo/heartify-logo.png";
import logo2 from "../assets/img/logo/heartify-logo-lite.png";
import dogsanlogo from "../assets/img/logo/Group_2.png";
 import { GoogleMap, LoadScript, Marker, useJsApiLoader  } from '@react-google-maps/api';
import backtotop from "../assets/img/backtotop.jpg"
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css"; // burasi
import "../assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../style.css";
import "../responsive-styling.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { Container, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Select from 'react-select';
import DOMPurify from "dompurify";
import "../social.css"




const containerStyle = {
    width: window.innerWidth-250,
    height: '400px'
  };
  
  const center = {
    lat: 39.0014629,
    lng: 30.6871553
  };

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];

export default function Bayiler() {
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
    const [bayi, setBayi] = useState([]);
    const [sehir, setSehir] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [actuve, setactive] = useState("");

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentTutorial({ ...currentTutorial, [name]: value });
    };

    useEffect(() => {

        retrieveBayi();
    }, []);
    useEffect(() => {

        retrieveSehir();
    }, []);

    useEffect(() => {

        retrievefiltered();
    }, []);

    const retrievefiltered = () => {
        BayiDataService.getAll()
            .then(response => {
                setFiltered(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveBayi = () => {
        BayiDataService.getAll()
            .then(response => {
                setBayi(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const retrieveSehir = () => {
        SehirDataService.getAll()
            .then(response => {
                setSehir(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        if (actuve === "") {
            setFiltered(bayi);
            return;
        }
        const filtered = bayi.filter((bayi) => bayi.sehir.includes(actuve));
        setFiltered(filtered)

    }, [actuve]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC1FGocZ7AfTxDhQvlQ2qdnyXrmeEe-Oms"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

    return (<div className="main-wrapper">
 
        <div>
            <div id="home">
                <div id="bg-slider-home" className="bsh">
                </div>
                <div className="container bs-main">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                            <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={dogsanlogo} alt="Heartify" /></a></div>

                            <div className="top-header hidden-xs">
                                <div className="top-navigation">
                                    <ul className="top-nav list-unstyled list-inline" >
                                        <li><Link to={"/Hakkimizda"} style={{ color: "#fafafa" }} className="nav-link">Kurumsal</Link></li>
                                        <li><Link to={"/Kataloglar"} style={{ color: "#fafafa" }} className="nav-link">Kataloglar</Link></li>
                                        <li><Link to={"/Urunler"} style={{ color: "#fafafa" }} className="nav-link">Ürünler</Link></li>
                                        <li className="logo"><Link to={"/"} className="nav-link"><img src={dogsanlogo} alt="Heartify" /></Link></li>
                                        <li><Link to={"/Duyurular"} style={{ color: "#fafafa" }} className="nav-link">Duyurular</Link></li>
                                        <li><Link to={"/Bloglar"} style={{ color: "#fafafa" }} className="nav-link">Blog</Link></li>
                                        <li><Link to={"/BizeUlasin"} style={{ color: "#fafafa" }} className="nav-link">İletişim</Link></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div className="page-head">

        </div>
        <div className="blog-content">
            <div className="container">
                <h1 className="col-md-9" style={{ fontWeight: "bold", color: "rgb(0 129 195)", textAlign: "center" }}>BAYİLER</h1>
                <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >

{
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
   
      </GoogleMap>
                <div className="bottom-space-30"></div>
                <div className="clearfix"></div>
                <div className="bottom-space-30"></div>
                <div className="clearfix"></div>
      {/*           <div  class="team-filter-nav text-center">
                  <ul id="filters" class="filter-nav list-inline list-unstyled">
                    <li style={{ float: "center" }}><a onClick={() => setactive("")} >TÜM BİRİMLER</a></li>
                  </ul>
                </div> */}
                <div class="col-md-4" style={{ fontWeight: "bold", textAlign: "center",color: "rgb(250, 250, 250)"  }}>
           
                        <Button size='lg' variant="primary" id="dropdown-basic-button" title="TÜM BAYİLER">
                        <a style={{ textAlign: "center",color: "rgb(250, 250, 250)"  }} onClick={() => setactive("")} >TÜM BAYİLER</a>
                        </Button>
          
                </div>
          
                <div class="col-md-5" style={{ fontWeight: "bold", textAlign: "center" }}>
                 
                        <DropdownButton size='lg' variant="primary" id="dropdown-basic-button" title="ŞEHİR SEÇİMİ">
                            {sehir.map(item => (
                                <div key={item.id}>
                                    <Dropdown.Item ><a name={item.sehirAdi.toString()} value={item.sehirAdi.toString()} onClick={() => setactive(item.sehirAdi)} class={actuve === item.sehirAdi.toString().type ? "active" : ""}>{item.sehirAdi}</a></Dropdown.Item></div>))}
                        </DropdownButton>
              
                </div>
                {/* {sehir.map(item => (

                    <div key={item.id} class="team-filter-nav text-center">
                        <ul id="filters" class="filter-nav list-inline list-unstyled">
                            <li style={{ float: "left" }}><a name={item.sehirAdi.toString()} value={item.sehirAdi.toString()} onClick={() => setactive(item.sehirAdi)} class={actuve === item.sehirAdi.toString().type ? "active" : ""}>{item.sehirAdi}</a></li>

                        </ul>
                    </div>
                ))} */}
                {filtered.map(item => (
                    <div key={item.id} className="col-md-9">
                        <article>
                            <div class="col-md-3" style={{ fontWeight: "bold", textAlign: "center" }}> <p style={{ textAlign: "center" }}>   <div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(item.sehir)  }}  ></div></p></div>
                            <div class="col-md-3" style={{ fontWeight: "bold", textAlign: "center" }}> <p style={{ textAlign: "center" }}>  <div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(item.baslik)  }}  ></div></p></div>
                            <div class="col-md-3" style={{ fontWeight: "bold", textAlign: "center" }}> <p style={{ textAlign: "center" }}>  <div dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(item.telefon)  }}  ></div></p></div>
                            <div className="bottom-space-30"></div>
                            <div className="clearfix"></div>
                        </article>

                    </div>))}
                <aside className="col-md-3">

                    <div className="side-content" >
                        <h5>İLETİŞİM</h5>
                        <ul className="list1">
                            <li><Link to={"/BizeUlasin"} className="nav-link">Bize Ulaşın</Link></li>
                        </ul>
                    </div>

                </aside>
            </div>
        </div>

        <div className="footer2">
            <img src={dogsanlogo} alt="" />
        </div>
        <ul class="fixed-social-menu list-inline-social mb-0" >
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.facebook.com/dogsansurgical/">
          <FaFacebookF size={23} style={{marginLeft: "-3px"}}/>
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.instagram.com/dogsansurgicalsutures/">
            <FaInstagram size={23} style={{marginLeft: "-3px"}}/>
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://tr.linkedin.com/company/dogsan-surgical-sutures">
          <FaLinkedinIn size={23} style={{marginLeft: "-3px"}}/>
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.youtube.com/channel/UChIvINCYAyWJP9-4JOv-vXg">
            <FaYoutube size={23} style={{marginLeft: "-3px"}}/>
          </a>
        </li>
      </ul>           

    </div>

    )

}
