
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "../../assets/theme/base/typography";
import SubKategoriService from "../../services/SubKategoriService";
import dogsanlogo from "../assets/img/logo/Group_2.png";
import logo from "../assets/img/logo/heartify-logo.png";
import logo2 from "../assets/img/logo/heartify-logo-lite.png";
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
import DOMPurify from "dompurify";
import "../social.css"



export default function Subdynamicdetaykategori() {
    let { kategoriid } = useParams();
    const [tutorials, setTutorials] = useState([]);
    const [currentTutorial, setCurrentTutorial] = useState(null);
    const [subkategori, setSubkategori] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const { pathname } = useLocation();
    const { size } = typography;

    useEffect(() => {

        retrieveSubkategori();
    }, []);



    const retrieveSubkategori = () => {
        SubKategoriService.get(kategoriid)
            .then(response => {
            setSubkategori(response.data);
          
              // console.log(response.data);

              // console.log(kategoriid);
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
                    <h1 className="col-md-9" style={{ fontWeight: "bold", color: "rgb(0 129 195)", textAlign: "center" }}></h1>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
              

                      
                        <div>
                            {subkategori.map(item => (

                                <div key={item.id} className="col-md-9">
                                    <article>

                                        <img src={item.Resim} className="img-responsive" alt="" />
                                        <div className="bottom-space-30"></div>
                                        <div className="clearfix"></div>
                                        <h1>
                                       
                                        <div dangerouslySetInnerHTML={{ __html:item.subkategoriadi}}  ></div></h1>

                                        <div className="bottom-space-30"></div>
                                        <div className="clearfix"></div>
                                        <h1>Tanım</h1>
                                       
                                        <div dangerouslySetInnerHTML={{ __html:item.tanim }}  ></div>

                                        <div className="bottom-space-30"></div>
                                        <div className="clearfix"></div>
                                        <h1>Kullanım Amacı</h1>
                                         <div dangerouslySetInnerHTML={{ __html:item.kullanimamaci}}  ></div>

                                        <div className="bottom-space-30"></div>
                                        <div className="clearfix"></div>
                                        <h1>Klinik Performans Özellikleri</h1>
                                         <div dangerouslySetInnerHTML={{ __html:item.performansozellikleri}}  ></div>

                                        <div className="bottom-space-30"></div>
                                        <div className="clearfix"></div>
                                        <h1>Klinik Fayda</h1>
                                         <div dangerouslySetInnerHTML={{ __html:item.fayda}}  ></div>

                                        <div className="bottom-space-30"></div>
                                        <div className="clearfix"></div>
                                        
                                    </article>
                                    
                                </div>))}
                        </div>

                    <aside className="col-md-3">
                       
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



