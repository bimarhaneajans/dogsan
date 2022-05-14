 
import UserService from "../services/user.service";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Router, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KategoriDataService from "../services/KategoriService";
import BlogDataService from "../services/BlogService";
import DuyuruDataService from "../services/DuyuruService";
import YoneticiDataService from "../services/YoneticilerService";

import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../routes";
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import logo from "../layouts/assets/img/logo/heartify-logo.png";
import logo2 from "../layouts/assets/img/logo/heart-icon.png";
import icon1 from "../layouts/assets/img/icons/icon-1.png";
import icon2 from "../layouts/assets/img/icons/icon-2.png";
import icon3 from "../layouts/assets/img/icons/icon-3.png";
import icon4 from "../layouts/assets/img/icons/icon-4.png";
import icon5 from "../layouts/assets/img/icons/icon-5.png";
import icon6 from "../layouts/assets/img/icons/icon-6.png";
import icon7 from "../layouts/assets/img/icons/icon-7.png";
import icon8 from "../layouts/assets/img/icons/icon-8.png";
import s2 from "../layouts/assets/img/icons/s2-ico1.png";
import postimg from "../layouts/assets/img/blog/post-img1.jpg"
import postimg2 from "../layouts/assets/img/blog/post-img2.jpg"
import postimg3 from "../layouts/assets/img/blog/post-img3.jpg"
import posticon from "../layouts/assets/img/blog/post-icon.png"

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
/* import "../layouts/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../layouts/assets/css/style.css"; // burasi
import "../layouts/assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../layouts/assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../../src/sliders/assets/css/responsive-styling.css" */
import "./style.css"
import "./responsive-styling.css"
import Sliders from "../sliders/slider"
import "./social.css"
import Subdynamicdetaykategori from "../layouts/Kategori/subdynamicdetaykategori"
import EmilebilirSuturler from "./EmilebilirSuturler/EmilebilirSuturler";
import SinglePost from "./SinglePost";
import Hakkimizda from "./kurumsal/hakkimizda";



export default function Home() {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [blog, setBlog] = useState([]);
  const [duyuru, setDuyuru] = useState([]);
  const [yoneticiler, setYoneticiler] = useState([]);


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

  useEffect(() => {

    retrieveBlogs();
  }, []);

  useEffect(() => {

    retrieveDuyuru();
  }, []);


  useEffect(() => {

    retrieveYoneticiler();
  }, []);

  const retrieveTutorials = () => {
    KategoriDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        //console.log(tutorials);

      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveBlogs = () => {
    BlogDataService.getAll()
      .then(response => {
        setBlog(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveDuyuru = () => {
    DuyuruDataService.getAll()
      .then(response => {
        setDuyuru(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveYoneticiler = () => {
    YoneticiDataService.getAll()
      .then(response => {
        setYoneticiler(response.data);
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
            <Sliders />

          </div>
        </div>

        <div className="container bs-main">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
              <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={logo} alt="Heartify" /></a></div>

              <div className="top-header hidden-xs">
                <div className="top-navigation">
                  <ul className="top-nav list-unstyled list-inline">
                    <li><Link to={"/Hakkimizda"} className="nav-link">Kurumsal</Link></li>
                    <li><Link to={"/Hakkimizda"} className="nav-link">Kataloglar</Link></li>
                    <li><Link to={"/Hakkimizda"} className="nav-link">İğneler</Link></li>
                    <li className="logo"><Link to={"/"} className="nav-link"><img src={logo} alt="Heartify" /></Link></li>
                    <li><Link to={"/Hakkimizda"} className="nav-link">Duyurular</Link></li>
                    <li><Link to={"/Hakkimizda"} className="nav-link">Blog</Link></li>
                    <li><Link to={"/Hakkimizda"} className="nav-link">İletişim</Link></li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>
        <div className="main-header">
          <div className="sticky-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pull-left">
                  <div className="main-logo">
                    <a href="index.html"><img className="pull-left" src={logo2} alt="Heartify" /><span>HEARTIFY</span></a>
                  </div>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="main-navigation hidden-xs">
                    <ul className="main-nav  list-unstyledd list-inline pull-right">
                      {tutorials && tutorials.map((tutorial, index) => (
                        <li onClick={() => setActiveTutorial(tutorial, index)}
                          key={index}><Link to={"/EmilebilirSuturler"} className="nav-link">{tutorial.kategoriadi}</Link></li>))}
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
                  <h2>HAKKIMIZDA</h2>
                  <h5>1970'ten Beri...</h5>
                  <p className="lead">Türkiye, Ortadoğu ve Balkanlar’daki ilk sütür üreticisi olan Doğsan, 1970 yılında kurulmuştur ve sütür üretiminde köklü bir geçmişe sahiptir.</p>
                </div>

                <div className="information">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon1} alt="icon" />
                      <div className="info-col">
                        <h5>MÜŞTERİ ODAKLILIK</h5>
                        <p>Müşterilerimizi anlamanın; “Cerrahlar”, “Hemşireler” ve bayilerin ihtiyaçlarını karşılamanın sorumluluğunu taşırız… Modern cerrahi değişimlerinin gereği olarak, Doğsan deneyimi ve müşteri odaklılığı ile teknolojimizi ve ürün yelpazemizi, cerrahların ve hemşirelerin ihtiyaçlarına göre uyumlaştırırız.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon2} alt="icon" />
                      <div className="info-col">
                        <h5>SÜREKLİ GELİŞİM</h5>
                        <p>Sektörel tüm gelişmeleri yakından takip ederek; öğrenen, gelişen ve yenilenen bir kurumsal kültür ile çalışırız. Müşterilerimizden ve çalışanlarımızdan gelen geri bildirimleri önemser ve dikkate alarak gerekli aksiyonları hayata geçiririz.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon3} alt="icon" />
                      <div className="info-col">
                        <h5>KALİTE YÖNETİMİ</h5>
                        <p>Üretim, pazarlama, satış ve yönetim süreçlerinin her bir kademesinde görev alan profesyonel kadrolar, operasyonel faaliyetlerin kesintisiz bir şekilde iyileştirilmesine yardımcı olur. Böylece Doğsan’da kalite prensipleri A’dan Z’ye ciddiyetler uygulanır.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon4} alt="icon" />
                      <div className="info-col">
                        <h5>TAKIM ÇALIŞMASI</h5>
                        <p>Yüksek deneyimli ve yetenekli her bir çalışanımızın bireysel becerisi, takım çalışmasına inanarak Doğsan’ın başarısını oluşturur. Farklı görüşlere saygı, çeşitliliğe duyulan inanç, dayanışma ruhu ve birbirine duyulan güven bizi birbirimize bağlayan en önemli kültürdür.</p>
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
                  <h3>KARİYER OLANAKLARI</h3>
                  <p>BİZİMLE ÇALIŞMAK İSTER MİSİNİZ?</p>
                </div>
                <p>Türkiye ve dünya çapında gerçekleştirdiği çalışmalarla adını kalite, güven ve inovasyon ile özdeşleştiren Doğsan bünyesindeki kariyer fırsatlarından haberdar olmak için bilgi formunu doldurabilirsiniz.</p>

              </div>
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                <a className="btn btn-primary btn-md apply-btn pull-right">KARİYER</a>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        {/*


        <ul class="projects-wrap">
                {blog.map(item => (

                  <li key={item.id}>
                    <img src={item.Resim} class="img-responsive" alt="" />
                    <div class="overlay">
                      <div class="overlay-inner">
                        <h4><span>{item.baslik}</span></h4>
                        <span class="comments">{item.Ozet}</span>
                       
                      </div>
                    </div>
                   
                  </li>
                ))} 
              </ul>
         */}
        <div className="text-center">
          <h2>DUYURULAR </h2>
        </div>
        <div className="clearfix" style={{ marginBottom: "28px" }}></div>


        <div id="services2">
          <div className="container">

            <div className="row">
              {duyuru.map(item => (
                <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center services2-info clr1">

                  <div className="clearfix"></div>
                  <img className="pull-center icon" src={s2} alt="icon" />

                  <div className="info-col">
                    <img style={{ width: "350px", height: "250px" }} src={item.Resim} />
                    <h5>{item.baslik}</h5>
                    <p>{item.icerik} </p>
                  </div>
                </div>
              ))}


            </div>

          </div>
          <div className="clearfix"></div>
        </div>





        <div id="services3">
          <div className="services-info3">
            <div className="container">
              <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                <h2>ONLİNE MÜŞTERİ PANELİ </h2>
                <h5>AKLINIZDAKİ TÜM SORULARI YANITLIYORUZ</h5>
                <p className="lead">Ürün ve hizmetlerimizle ilgili satış/destek süreçlerinde her zaman yanınızdayız. Aklınızdaki tüm soruları online müşteri panelinden bizlere iletebilirsiniz.
                </p>
              </div>
              <div className="bottom-space-50"></div>
              <img src="assets/img/1.png" className="img-responsive" alt="" />
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div id="services">
          <div className="services-info s2-info">
            <div className="container">
              <div className="row bottom-space-50">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon1} alt="icon" />
                  <div className="info-col">
                    <h5>7/24 DESTEK HİZMETİ</h5>
                    <p>Doğsan, kalite politikası gereği tüm saha ekipleri ve bayiler aracılığıyla en acil durumlarda yanı başınızda.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon5} alt="icon" />
                  <div className="info-col">
                    <h5>CERRAHLARIN ÖNCELİKLİ TERCİHİ
                    </h5>
                    <p>Cerrahi operasyonlarda dünya standartlarındaki ürünlerimizle en çok tercih edilen marka olmanın gururunu yaşıyoruz.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon6} alt="icon" />
                  <div className="info-col">
                    <h5>HASTANELERİN ÖNCELİKLİ TERCİHİ</h5>
                    <p>Operasyon güvenliği, malzeme verimliliği açısından geliştirdiği inovatif çözümlerle Doğsan üniversite ve kamu hastaneleri ile özel hastanelerde en çok talep edilen marka oldu.</p>
                  </div>
                </div>
              </div>
              <div className="row bottom-space-50">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon4} alt="icon" />
                  <div className="info-col">
                    <h5>YÜKSEK KALİTE ANLAYIŞI </h5>
                    <p>Deneyimli ekipler ile teknolojinin bütün olanakları seferber edilerek geliştirilen ürünlerimiz, evrensel kalite standartlarına uygun olarak üretilmektedir.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon7} alt="icon" />
                  <div className="info-col">
                    <h5>EĞİTİM PROGRAMLARI </h5>
                    <p>Cerrahi teknolojiler konusunda yaşanan güncel gelişmeler, operasyon yönetimi ve teknik konularda profesyonel hekimler ve öncü bilim insanları aracılığıyla Doğsan bünyesinde eğitim organizasyonları düzenlenmektedir.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon8} alt="icon" />
                  <div className="info-col">
                    <h5>SOSYAL SORUMLULUK </h5>
                    <p>Ülkemizde ve dünyada yaşanan insani sorunlara hassasiyet gösteren Doğsan ailesi, daha yaşanabilir bir dünya için canla başla çalışıyor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <div >
          <section class="client-div" style={{ marginTop: 50, height: 400 }}>
            <div class="container">
              <div class="row">
                <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                  <div class="client-stat text-center" style={{ margin: "100px auto", backgroundColor: "white", padding: "45px 20px 44px 21px" }} >
                    <h3 >DÜNYADA DOĞSAN</h3>
                    <p> Avrupa, Asya ve Ortadoğu’da 40’ı aşkın ülkeye ihracat yapan Doğsan, kalite standartlarına uygun olarak ürettiği geniş ürün yelpazesiyle sütür üretiminde Türkiye’nin Dünya pazarlarındaki temsilcisi konumundadır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>



        <div id="team">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-md-offset-2">
                <div className="team-stat text-center">
                  <h2>AİLEMİZLE TANIŞIN</h2>
                  <h5>EKİBİMİZLE BÜYÜK BİR AİLEYİZ</h5>
                  <p className="lead"> Üretim, pazarlama, satış ve yönetim süreçlerinin her kademesindeki deneyimli kadromuz ile uzmanlık isteyen tüm konularda yanınızdayız
                  </p>
                </div>
                <div className="team-filter-nav text-center">
                  <ul id="filters" className="filter-nav list-inline list-unstyled">
                    <li><a data-filter="*" className="current" href="#">İDARİ EKİBİMİZ</a></li>
                    <li><a data-filter=".general" href="#">PAZARLAMA BİRİMİ</a></li>
                    <li><a data-filter=".uretimdepartmani" href="#">ÜRETİM DEPARTMANI</a></li>
                    <li><a data-filter=".sahaekibi" href="#">SAHA EKİBİMİZ</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {yoneticiler.map(item => (
              <div key={item.id} className="row col-xs-12">
                <div id="container" className="container team-detail">

                  <div className="item general col-md-12">

                    <div className="team-member">
                      <a data-toggle="modal" data-target="#myModal">
                        <div className="team-img">
                          <img src={item.Resim} className="img-responsive" alt="" />
                        </div>
                      </a>
                      <div className="member-details" >
                        <h6>{item.pozizyon}</h6>
                        <h4> {item.yoneticiadi}{item.yoneticisoyadi}</h4>
                        <p>{item.kariyer} </p>

                      </div>
                    </div>
                  </div>


                </div>
              </div>))}
            <div>

            </div>
          </div>
        </div>


     {/*    <div id="projects">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                <div class="blog-stat text-center">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-md-12">
              <div class="bottom-space-50"></div>
              <ul class="projects-wrap">
                {blog.map(item => (

                  <li key={item.id}>
                    <img src={item.Resim} class="img-responsive" alt="" />
                    <div class="overlay">
                      <div class="overlay-inner">
                        <h4><span>{item.baslik}</span></h4>
                        <span class="comments">{item.Ozet}</span>
                      <a href="#">View more</a> 
                      </div>
                    </div>

                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div> */}

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
          {/*   <div class="row">
              <div class="col-md-12">
                <div class="bottom-space-50"></div>
                <ul class="projects-wrap">
                  {blog.map(item => (

                    <li key={item.id}>
                      <img src={item.Resim} class="img-responsive" alt="" />
                      <div class="overlay">
                        <div class="overlay-inner">
                          <h4><span>{item.baslik}</span></h4>
                          <span class="comments">{item.Ozet}</span>
                         <a href="#">View more</a> 
                        </div>
                      </div>

                    </li>
                  ))}
                </ul>

              </div>
            </div> */}
          </div>
          <div id="blog">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                  <div className="blog-stat text-center">
                    <h2>BLOG</h2>
                    <h5>SÜTÜR TEKNOLOJİSİNE DAİR HER ŞEY</h5>
                    <p className="lead">Dünya genelinde sütür teknolojilerinde yaşanan son
gelişmeler, teknik konular ve daha fazlası için blog sayfamızı ziyaret edebilirsiniz.

Blog yazıları için yukarıdaki format çalışır durumda. Ayrı sayfalara da yönlendiriyor.</p>
                  </div>
                </div>
                <div id="blog-posts">
                  {blog.map(item => (
                    <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="blog-post">
                        <div className="post-img">
                          <img src={item.Resim} className="img-responsive" alt="" />
                          <img className="ab-icon" src={posticon} alt="" />
                        </div>
                        <div className="info-col">
                          <a href="./single_post.html">
                            <h5>{item.baslik}</h5>
                          </a>
                          <p>{item.Ozet}</p>
                        </div>
                        <ul className="list-inline list-unstyled post-nav">
                          <li className="post-links"><a href=""><i className="icon-user"></i> The Ronins</a></li>
                          <li className="post-links"><a href=""><i className="icon-calendar"></i> 23 October 2013</a></li>
                        </ul>
                      </div>
                    </div>))}

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
                <ul className="footer-social">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>


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

