
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "../../assets/theme/base/typography";
import KatalagDataService from "../../services/KatalogService";
import dogsanlogo from "../assets/img/logo/Group_2.png";
import logo from "../assets/img/logo/heartify-logo.png";
import logo2 from "../assets/img/logo/heartify-logo-lite.png";
import backtotop from "../assets/img/backtotop.jpg"
import { ReactSVG } from 'react-svg'
import svgpdf from "../assets/img/pdf.svg"
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css"; // burasi
import "../assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../style.css";
import "../responsive-styling.css";

/* import SVG, { Props as SVGProps } from 'react-inlinesvg';  */

export default function Kataloglar() {
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [katalog, setKatalog] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const { pathname } = useLocation();
    const { size } = typography;


    /*  const logo = useRef<SVGElement>(null);
 
     const Logo = React.forwardRef<SVGElement>((props, ref) => (
         <SVG innerRef={ref} title="MyLogo" {...props} />
       )); */
    useEffect(() => {

        retrieveKatalog();
    }, []);



    const retrieveKatalog = () => {
        KatalagDataService.getAll()
            .then(response => {
                setKatalog(response.data);
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
                {/*  <div className="container">
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
                    <h1 className="col-xs-12" style={{ fontWeight: "bold", color: "rgb(0 129 195)", textAlign: "center" }}>KATALOGLAR</h1>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <div className="col-xs-12">


                        {katalog.map(item => (
                            <div key={item.id}  >
                            
                                <div className="clearfix"></div>
                                <div className="clearfix"></div>
                                <div class="information-box__grid col-xs-2" >
                                    <Link to={"/KatalogDetay/" + item.id} class="information-box__grid-item" >

                                        <div class="information-box__grid-image" >

                                            <img src={item.Resim} style={{ objectFit: "cover", height: "350px", width: "450px" }} />
                                            <img class="information-box__grid-icon" src={svgpdf} alt="pdf" />
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: item.katalogadi }}  ></div>

                                    </Link>


                                </div>



                            </div>
                        ))}





                    </div>

                </div>
            </div>

            <div className="footer2">
                <img src={dogsanlogo} alt="" />
            </div>

            <div className="footer2-bottom">
                <div className="container">
                    <div className="col-md-6">

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
                    <a href="javascript:void(0)" className="bttop"><img src={backtotop} alt="" /></a>
                </div>
            </div>
        </div>

    )

}
