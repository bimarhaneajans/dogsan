

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "../../assets/theme/base/typography";
import TarihceDataService from "../../services/TarihceService";

import dogsanlogo from "../assets/img/logo/Group_2.png";
import logo from "../assets/img/logo/heartify-logo.png";
import backtotop from "../assets/img/backtotop.jpg"
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css"; // burasi
import "../assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../style.css";
import "../responsive-styling.css";

import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player';
import TarihceSlider from "./TarihceSlider";
import "../social.css"


export default function Hakkimizda() {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [tarihce, setTarihce] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const { pathname } = useLocation();
    const { size } = typography;

    useEffect(() => {

        retrieveTarihce();
    }, []);

  

    const retrieveTarihce = () => {
        TarihceDataService.getAll()
            .then(response => {
                setTarihce(response.data);
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

            </div>
            <div className="blog-content">

                <div className="container">
                    <h1 className="col-md-9" style={{ fontWeight: "bold", color: "rgb(0 129 195)", textAlign: "center" }}>TARİHÇE</h1>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>




                    <TarihceSlider/>
                    {tarihce.map(item => (
                        <div key={item.id} className="col-md-9">
                            <article>
                                <img src={item.Resim} className="img-responsive" alt="" />
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>

                                <div dangerouslySetInnerHTML={{ __html: item.Yil }}  ></div>

                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>

                                <div dangerouslySetInnerHTML={{ __html: item.icerik }}  ></div>

                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                            </article>

                        </div>))}
                    <aside className="col-md-3">

                        <div className="side-content">
                            <h5>KURUMSAL</h5>
                            <ul className="list1">
                                <li><Link to={"/Hakkimizda"} className="nav-link">HAKKIMIZDA</Link></li>
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
            <i class="fa fa-facebook" ></i>
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.instagram.com/dogsansurgicalsutures/">
            <i class="fa fa-instagram" ></i>
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://tr.linkedin.com/company/dogsan-surgical-sutures">
            <i class="fa fa-linkedin" ></i>
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.youtube.com/channel/UChIvINCYAyWJP9-4JOv-vXg">
            <i class="fa fa-youtube-play" ></i>
          </a>
        </li>
      </ul>
        </div>

    )

}
