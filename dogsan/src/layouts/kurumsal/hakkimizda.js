

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "../../assets/theme/base/typography";
import HakkimizdaDataService from "../../services/HakkimizdaService";
import logo from "../assets/img/logo/heartify-logo.png";
import logo2 from "../assets/img/logo/heartify-logo-lite.png";
import dogsanlogo from "../assets/img/logo/Group_2.png";

import backtotop from "../assets/img/backtotop.jpg"
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css"; // burasi
import "../assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../style.css";
import "../responsive-styling.css";
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



export default function Tarihce() {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [hakkimizda, setHakkimizda] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const { pathname } = useLocation();
    const { size } = typography;

    useEffect(() => {

        retrieveHakkimizda();
    }, []);



    const retrieveHakkimizda = () => {
        HakkimizdaDataService.getAll()
            .then(response => {
                setHakkimizda(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };




    return (
        <div>
            <div className="main-wrapper">
                <div id="home">
                    <div id="bg-slider-home" className="bsh">
                    </div>
                    <div className="container bs-main">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                                <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={logo} alt="Heartify" /></a></div>

                                <div className="top-header hidden-xs">
                                    <div className="top-navigation">
                                        <ul className="top-nav list-unstyled list-inline" >
                                            <li><Link to={"/Hakkimizda"} style={{ color: "#fafafa" }} className="nav-link">Kurumsal</Link></li>
                                            <li><Link to={"/Kataloglar"} style={{ color: "#fafafa" }} className="nav-link">Kataloglar</Link></li>
                                            <li><Link to={"/Igneler"} style={{ color: "#fafafa" }} className="nav-link">İğneler</Link></li>
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
                {/* <div className="container">
                    <div className="col-md-9">
                        <h3>Standard Post Format with preview picture</h3>
                        <span className="post-meta">Posted 22.06.2014 at 18:00h in Healthy lifestyle by <a href="#">The Ronins</a>   /   68 Likes   /   <a href="#">2 Comments</a></span>
                    </div>
                    <div className="col-md-3">
                        <form className="search">
                            <input type="search" placeholder="Search..." />
                        </form>
                    </div>
                </div> */}
            </div>
            <div className="blog-content">
                <div className="container">
                <h1 className="col-md-9" style={{ fontWeight: "bold", color: "rgb(0 129 195)", textAlign: "center" }}>HAKKIMIZDA</h1>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    {hakkimizda.map(item => (
                        <div key={item.id} className="col-md-9">
                            <article>
                                <img src={item.Resim} className="img-responsive" alt="" />
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                 <div dangerouslySetInnerHTML={{ __html: item.AnaIcerik }}  ></div>
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                 <div dangerouslySetInnerHTML={{ __html: item.BelgeselIcerigi }}  ></div>
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                <div className="reactPly" >
                                <ReactPlayer url={item.BelgeselVideoUrl} /> 
                                </div>

                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                            </article>
                 
                        </div>))}
                    <aside className="col-md-3">
                        <div className="side-content">
                            <h5>KURUMSAL</h5>
                            <ul className="list1">
                               
                                <li><Link to={"/Tarihce"} className="nav-link">TARİHÇE</Link></li>
                                <li><Link to={"/Degerler"} className="nav-link">DEĞERLER</Link></li>
                                <li><Link to={"/SosyalSorumluluk"} className="nav-link">SOSYAL SORUMLULUK</Link></li>
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