import UserService from "../services/user.service";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Router, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import JsonTable from 'react-json-to-html';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KategoriDataService from "../services/KategoriService";
import BlogDataService from "../services/BlogService";
import DuyuruDataService from "../services/DuyuruService";
import YoneticiDataService from "../services/YoneticilerService";
import SlaytDataService from "../services/SliderService";
import KariyerDataService from "../services/KariyerService";
import axios from "axios";
import { RWebShare } from "react-web-share";
import $ from "jquery"
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../routes";
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import dateFormat, { masks } from "dateformat";
import dogsanlogo from "../layouts/assets/img/logo/Group_2.png";
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
import posticon from "../layouts/assets/img/blog/post-icon.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import HTMLRenderer from 'react-html-renderer'
import JSONViewer from 'react-json-viewer';


/* import "../layouts/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../layouts/assets/css/style.css"; // burasi
import "../layouts/assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../layouts/assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../../src/sliders/assets/css/responsive-styling.css" */
import "./style.css"
import "./responsive-styling.css"
import "./social.css"
import Slider from "../sliders/yedeksliders";
import DOMPurify from "dompurify";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Home() {
  const initialMesajState = {
    id: null,
    Subject: '',
    email: '',
    Content: '',
  };
  const [tutorials, setTutorials] = useState([]);
  const [mesaj, setMesaj] = useState(initialMesajState);
  const [resimler, setResimler] = useState([]);
  const [videolar, setVideolar] = useState([]);

  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = React.useState('*');

  //const images = [  { source: 'https://i.pinimg.com/originals/1f/d9/a2/1fd9a2c9f6574e126c275055060fb659.jpg' }]
  const images = [{ source: 'https://i.pinimg.com/originals/1f/d9/a2/1fd9a2c9f6574e126c275055060fb659.jpg' }]

  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [blog, setBlog] = useState([]);
  const [duyuru, setDuyuru] = useState([]);
  const [slaty, setSlayt] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;
  const slides = [];
  const [yoneticiler, setYoneticiler] = useState([]);
  const [kariyer, setKariyer] = useState([]);
  const [kariyerr, setKariyerr] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [actuve, setactive] = useState("");


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
  useEffect(() => {

    retrieveSlayt();
  }, []);



  useEffect(() => {

    retrieveKariyer();


  }, []);
  useEffect(() => {

    retrieveYoneticilerFilter();
  }, []);


  useEffect(() => {
    if (actuve === "") {
      setFiltered(kariyerr);
      return;
    }
    const filtered = kariyerr.filter((kariyerr) => kariyerr.kariyer.includes(actuve));
    setFiltered(filtered)

  }, [actuve]);


  const retrieveKariyer = () => {
    KariyerDataService.getAll().then
      (response => {
        setKariyer(response.data)

      })
      .catch(e => { // console.log(response.data);
        console.log(e);
      });
  };
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
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrieveDuyuru = () => {
    DuyuruDataService.getAll()
      .then(response => {
        setDuyuru(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const retrieveYoneticiler = () => {
    YoneticiDataService.getAll()
      .then(response => {

        setKariyerr(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  };
  const retrieveYoneticilerFilter = () => {
    YoneticiDataService.getAll()
      .then(response => {
        setFiltered(response.data)

      })
      .catch(e => {
        console.log(e);
      });
  };


  const retrieveSlayt = () => {
    SlaytDataService.getAll()
      .then(response => {
        const persons = response.data;

        setSlayt(persons)
        //);
        //console.log(persons)



      })
      .catch(e => {
        console.log(e);
      });
  };
  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleInputChange = event => {
    const { name, value } = event.target;
    setMesaj({ ...mesaj, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      Subject: mesaj.Subject,
      email: mesaj.email,
      Content: mesaj.Content,
    };

    KariyerDataService.create(data)
      .then(response => {
        setMesaj({
          id: response.data.id,
          Subject: response.data.Subject,
          email: response.data.email,
          Content: response.data.Content,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (

    <div className="main-wrapper" >
      <div id="home">
        <div id="bg-slider-home">
    <Slider />  
          <div id="slider-wrapper">
          </div>
        </div>

        <div className="container bs-main">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
              <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={dogsanlogo} alt="Heartify" /></a></div>

              <div className="top-header hidden-xs">
                <div className="top-navigation">
                  <ul className="top-nav list-unstyled list-inline">
                    <li><Link to={"/Hakkimizda"} className="nav-link">Kurumsal</Link></li>
                    <li><Link to={"/Kataloglar"} className="nav-link">Kataloglar</Link></li>
                    <li><Link to={"/Urunler"} className="nav-link">??r??nlerimiz</Link></li>
                    <li className="logo"><Link to={"/home"} className="nav-link"><img src={dogsanlogo} alt="Heartify" /></Link></li>
                    <li><Link to={"/Duyurular"} className="nav-link">Duyurular</Link></li>
                    <li><Link to={"/Bloglar"} className="nav-link">Blog</Link></li>
                    <li><Link to={"/BizeUlasin"} className="nav-link">??leti??im</Link></li>
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
                    <a href="index.html"><img className="pull-left" src={dogsanlogo} alt="Heartify" /></a>
                  </div>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="main-navigation hidden-xs">
                    <ul className="main-nav  list-unstyledd list-inline pull-right">
                      {tutorials && tutorials.map((tutorial, index) => (
                        <li onClick={() => setActiveTutorial(tutorial, index)}
                          key={index}><Link to={"/Subdynamicdetaykategori/" + tutorial.kategoriid} className="nav-link"><div dangerouslySetInnerHTML={{ __html:tutorial.kategoriadi }}  /></Link></li>))}
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
                              key={index}><a href={"#" + tutorial.path}> <div dangerouslySetInnerHTML={{ __html:tutorial.kategoriadi }}  /></a></li>))}
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
                  <p className="lead">T??rkiye, Ortado??u ve Balkanlar???daki ilk s??t??r ??reticisi olan Do??san, 1970 y??l??nda kurulmu??tur ve s??t??r ??retiminde k??kl?? bir ge??mi??e sahiptir.</p>

                  <Link to={"/Hakkimizda"} className="nav-link">T??m??n?? G??r</Link>
                </div>

                <div className="information">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <h2>KAL??TE POL??T??KAMIZ</h2></div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon1} alt="icon" />
                      <div className="info-col">
                        <h5>M????TER?? ODAKLILIK</h5>
                        <p>M????terilerimizi anlaman??n; ???Cerrahlar???, ???Hem??ireler??? ve bayilerin ihtiya??lar??n?? kar????laman??n sorumlulu??unu ta????r??z??? Modern cerrahi de??i??imlerinin gere??i olarak, Do??san deneyimi ve m????teri odakl??l?????? ile teknolojimizi ve ??r??n yelpazemizi, cerrahlar??n ve hem??irelerin ihtiya??lar??na g??re uyumla??t??r??r??z.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon2} alt="icon" />
                      <div className="info-col">
                        <h5>S??REKL?? GEL??????M</h5>
                        <p>Sekt??rel t??m geli??meleri yak??ndan takip ederek; ????renen, geli??en ve yenilenen bir kurumsal k??lt??r ile ??al??????r??z. M????terilerimizden ve ??al????anlar??m??zdan gelen geri bildirimleri ??nemser ve dikkate alarak gerekli aksiyonlar?? hayata ge??iririz.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon3} alt="icon" />
                      <div className="info-col">
                        <h5>KAL??TE Y??NET??M??</h5>
                        <p>??retim, pazarlama, sat???? ve y??netim s??re??lerinin her bir kademesinde g??rev alan profesyonel kadrolar, operasyonel faaliyetlerin kesintisiz bir ??ekilde iyile??tirilmesine yard??mc?? olur. B??ylece Do??san???da kalite prensipleri A???dan Z???ye ciddiyetler uygulan??r.</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                      <img className="pull-center icon" src={icon4} alt="icon" />
                      <div className="info-col">
                        <h5>TAKIM ??ALI??MASI</h5>
                        <p>Y??ksek deneyimli ve yetenekli her bir ??al????an??m??z??n bireysel becerisi, tak??m ??al????mas??na inanarak Do??san?????n ba??ar??s??n?? olu??turur. Farkl?? g??r????lere sayg??, ??e??itlili??e duyulan inan??, dayan????ma ruhu ve birbirine duyulan g??ven bizi birbirimize ba??layan en ??nemli k??lt??rd??r.</p>
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
                  <h3>KAR??YER OLANAKLARI</h3>
                  <p>B??Z??MLE ??ALI??MAK ??STER M??S??N??Z?</p>
                </div>
                <p>T??rkiye ve d??nya ??ap??nda ger??ekle??tirdi??i ??al????malarla ad??n?? kalite, g??ven ve inovasyon ile ??zde??le??tiren Do??san b??nyesindeki kariyer f??rsatlar??ndan haberdar olmak i??in bilgi formunu doldurabilirsiniz.</p>

              </div>
              <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                <button className="btn btn-primary btn-md apply-btn pull-right" onClick={openModal}>KAR??YER</button>
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >

                  <div className="col-md-12">
                    <div className="app-form">
                      <form className="appointment-form">
                        <h4>B??ZE ULA??IN</h4>
                        <label>Ad Soyad</label>
                        <input
                          type="text"
                          className="form-control"
                          id="Subject"
                          required
                          value={mesaj.Subject}
                          onChange={handleInputChange}
                          name="Subject"
                        />
                        <label>E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                          value={mesaj.email}
                          onChange={handleInputChange}
                          name="email"
                        />
                        <label>Mesaj</label>
                        <textarea rows="10"
                          type="text"
                          name="Content"
                          value={mesaj.Content}
                          onChange={handleInputChange}
                        ></textarea>
                        <div className="submit-wrap row">
                          <div className="col-md-5">
                            <button onClick={saveTutorial} className="btn btn-success">
                              Submit
                            </button>
                            {/*     <button type="submit" onClick={closeModal}>close</button> */}
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>


                </Modal>

              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="text-center">
          <h2>DUYURULAR</h2>
        </div>
        <div className="clearfix" style={{ marginBottom: "28px" }}></div>


        <div id="services2">
          <div className="container">

            <div className="row">
              {duyuru.map(item => (
                <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center services2-info clr1" style={{ height: "750px" }}>

                  <div className="clearfix"></div>
                  <img className="pull-center icon" src={s2} alt="icon" />

                  <div className="info-col">
                    <img style={{ width: "350px", height: "250px" }} src={item.Resim} />
                    <div dangerouslySetInnerHTML={{ __html:item.baslik}}  ></div>
                    <div dangerouslySetInnerHTML={{ __html:item.icerik }}  ></div>
                  </div>
                  <Link to={"/Duyuru/" + item.id} className="nav-link">G??ster</Link>
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
                <h2>ONL??NE M????TER?? PANEL?? </h2>
                <h5>AKLINIZDAK?? T??M SORULARI YANITLIYORUZ</h5>
                <p className="lead">??r??n ve hizmetlerimizle ilgili sat????/destek s??re??lerinde her zaman yan??n??zday??z. Akl??n??zdaki t??m sorular?? online m????teri panelinden bizlere iletebilirsiniz.
                </p>
              </div>
              <div className="bottom-space-50"></div>
              <div className="col-xs-12">
                <div className="col-xs-2"></div>
                <div className="col-xs-8" >
                  <form className="appointment-form">
                    <h4>M????teri ??leti??im Formu</h4>
                    <h4>B??ZE ULA??IN</h4>
                    <label>Ad Soyad</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Subject"
                      required
                      value={mesaj.Subject}
                      onChange={handleInputChange}
                      name="Subject"
                    />
                    <label>E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      value={mesaj.email}
                      onChange={handleInputChange}
                      name="email"
                    />
                    <label>Mesaj</label>
                    <textarea rows="10"
                      type="text"
                      name="Content"
                      value={mesaj.Content}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="submit-wrap row">
                      <div className="col-md-5">
                        <button onClick={saveTutorial} className="btn btn-success">
                          Submit
                        </button>
                        {/*    <button type="submit" onClick={closeModal}>close</button> */}
                      </div>
                    </div>

                  </form>
                </div><div className="col-xs-2"></div></div>

              {/* <img src="assets/img/1.png" className="img-responsive" alt="" /> */}
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
                    <h5>7/24 DESTEK H??ZMET??</h5>
                    <p>Do??san, kalite politikas?? gere??i t??m saha ekipleri ve bayiler arac??l??????yla en acil durumlarda yan?? ba????n??zda.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon5} alt="icon" />
                  <div className="info-col">
                    <h5>CERRAHLARIN ??NCEL??KL?? TERC??H??
                    </h5>
                    <p>Cerrahi operasyonlarda d??nya standartlar??ndaki ??r??nlerimizle en ??ok tercih edilen marka olman??n gururunu ya????yoruz.</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon6} alt="icon" />
                  <div className="info-col">
                    <h5>HASTANELER??N ??NCEL??KL?? TERC??H??</h5>
                    <p>Operasyon g??venli??i, malzeme verimlili??i a????s??ndan geli??tirdi??i inovatif ????z??mlerle Do??san ??niversite ve kamu hastaneleri ile ??zel hastanelerde en ??ok talep edilen marka oldu.</p>
                  </div>
                </div>
              </div>
              <div className="row bottom-space-50">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon4} alt="icon" />
                  <div className="info-col">
                    <h5>Y??KSEK KAL??TE ANLAYI??I </h5>
                    <p>Deneyimli ekipler ile teknolojinin b??t??n olanaklar?? seferber edilerek geli??tirilen ??r??nlerimiz, evrensel kalite standartlar??na uygun olarak ??retilmektedir.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon7} alt="icon" />
                  <div className="info-col">
                    <h5>E????T??M PROGRAMLARI </h5>
                    <p>Cerrahi teknolojiler konusunda ya??anan g??ncel geli??meler, operasyon y??netimi ve teknik konularda profesyonel hekimler ve ??nc?? bilim insanlar?? arac??l??????yla Do??san b??nyesinde e??itim organizasyonlar?? d??zenlenmektedir.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <img className="pull-left icon" src={icon8} alt="icon" />
                  <div className="info-col">
                    <h5>SOSYAL SORUMLULUK </h5>
                    <p>??lkemizde ve d??nyada ya??anan insani sorunlara hassasiyet g??steren Do??san ailesi, daha ya??anabilir bir d??nya i??in canla ba??la ??al??????yor.
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
                    <h3 >D??NYADA DO??SAN</h3>
                    <p> Avrupa, Asya ve Ortado??u???da 40????? a??k??n ??lkeye ihracat yapan Do??san, kalite standartlar??na uygun olarak ??retti??i geni?? ??r??n yelpazesiyle s??t??r ??retiminde T??rkiye???nin D??nya pazarlar??ndaki temsilcisi konumundad??r.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="team">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-md-offset-2">
                <div class="team-stat text-center">
                  <h2>A??LEM??ZLE TANI??IN</h2>
                  <h5>EK??B??M??ZLE B??Y??K B??R A??LEY??Z</h5>
                  <p class="lead"> ??retim, pazarlama, sat???? ve y??netim s??re??lerinin her kademesindeki deneyimli kadromuz ile uzmanl??k isteyen t??m konularda yan??n??zday??z</p>
                  <div  class="team-filter-nav text-center">
                  <ul id="filters" class="filter-nav list-inline list-unstyled">
                    <li style={{ float: "center" }}><a onClick={() => setactive("")} >T??M B??R??MLER</a></li>
                  </ul>
                </div>
                </div>
                
                {kariyer.map(item => (
                 
                  <div key={item.id} class="team-filter-nav text-center">
                    <ul id="filters" class="filter-nav list-inline list-unstyled">
                      <li style={{ float: "left" }}><a name={item.kariyeradi.toString()} value={item.kariyeradi.toString()} onClick={() => setactive(item.kariyeradi)} class={actuve === item.kariyeradi.toString().type ? "active" : ""}>{item.kariyeradi}</a></li>
                      
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="row">
              <div id="container" class="container team-detail">
                {filtered.map(item => (
                  <div key={item.id} class="item general col-md-6">
                    <div class="team-member">
                      <a data-toggle="modal" data-target="#myModal">
                        <div className="team-img">
                          <img src={item.Resim} className="img-responsive" alt="" />
                        </div>
                      </a>
                      <div className="member-details" >

                      
                        <h6>  <div dangerouslySetInnerHTML={{ __html:item.pozizyon}}  ></div></h6>
                        <h4> <div dangerouslySetInnerHTML={{ __html:item.yoneticiadi }} /> <div dangerouslySetInnerHTML={{ __html:item.yoneticisoyadi}}  /></h4>
                        <p> <div dangerouslySetInnerHTML={{ __html:item.kariyer}}  /></p>
                        <p> <div dangerouslySetInnerHTML={{ __html:item.kisaozgecmis }}  /></p>
                       
                       
                        <div class="member-social">
                          <h6>Sosyal Profiller</h6>
                          <ul class="list-inline list-unstyled pull-right social">
                            <li><a href="#"><FaTwitter size={15} />{item.twitter}</a></li>
                            <li><a href="#"><FaFacebookF size={15} />{item.facebook}</a></li>
                            <li><a href="#"><FaLinkedinIn size={15} />{item.linkedin}</a></li>
                            <li><a href="#"><FaGooglePlusG size={22} />{item.googleplus}</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>))}


              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div id="doctor-info">
          <div className="container">

          </div>
          <div id="blog">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
                  <div className="blog-stat text-center">
                    <h2>BLOG</h2>
                    <h5>S??T??R TEKNOLOJ??S??NE DA??R HER ??EY</h5>
                    <p className="lead">D??nya genelinde s??t??r teknolojilerinde ya??anan son
                      geli??meler, teknik konular ve daha fazlas?? i??in blog sayfam??z?? ziyaret edebilirsiniz.

                      Blog yaz??lar?? i??in yukar??daki format ??al??????r durumda. Ayr?? sayfalara da y??nlendiriyor.</p>
                  </div>
                </div>
                <div id="blog-posts">
                  {blog.map(item => (
                    <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="blog-post" >
                        <div className="post-img">
                          <img src={item.Resim} style={{ height: "350px", width: "480px" }} className="img-responsive" alt="" />
                          <img className="ab-icon" src={posticon} alt="" />
                        </div>
                        <div className="info-col">

                        <div dangerouslySetInnerHTML={{ __html:item.baslik }}  />
                        <div dangerouslySetInnerHTML={{ __html:item.Ozet}}  /> 
                        </div>
                        <ul className="list-inline list-unstyled post-nav">
                          <li className="post-links"><a href=""><i className="icon-user"></i><RWebShare
                            data={{
                              text: "Blog payla????m linki",
                              url: "/Blog/" + item.id,
                              title: "Flamingos",
                            }}
                            onClick={() => console.log("shared successfully!")}
                          >
                            <button className="btn btn-primary" >Payla?? ????</button>
                          </RWebShare></a></li>
                          <li className="post-links"><a href=""><i className="icon-calendar"></i>{(dateFormat(item.createdAt.slice(0, -14), "dd/mm/yyyy"))} </a></li>
                        </ul>
                      </div>
                      <div className="text-center"><Link to={"/Blog/" + item.id} className="nav-link">G??ster</Link></div>

                      <div>

                      </div>
                    </div>))}

                </div>
              </div>
            </div>
          </div>


          <div className="clearfix"></div>

          <div id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="contact-stat text-center">
                    <h2>??LET??????M FORMU</h2>
                    <h5></h5>
                    <p className="lead"></p>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="info-col text-center">
                        <h4>??RET??M TES??SLER??</h4>
                        <p className="contact-time">Rize Cad. No: 91/A Yal??ncak 61220 Trabzon</p>
                        <p className="phone">+90 462 334 06 90</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="info-col text-center">
                        <h4>SATI?? & PAZARLAMA</h4>
                        <p className="clinic-add">Y??ld??z Cad. No: 55/A Be??ikta?? 34353 ??stanbul</p>
                        <p className="email"><a href="mailto:contact@theronins.com">+90 212 258 00 54</a></p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="info-col text-center">
                        <h4>SATI?? & PAZARLAMA</h4>
                        <p className="contact-email">Ankara Han??meli Sok. No: 26-10 S??hhiye 06100 Ankara</p>
                        <p className="email"><a href="mailto:contact@theronins.com">+90 312 231 58 06</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="footer2" style={{ height: "250px" }}>

            <div className="col-xs-3">
              <div style={{ marginTop: "50px" }}><a href="/files/dogsan_bilg_talebi_formu.docx" style={{ marginLeft: "100px", marginTop: "50px", color: "rgb(250, 250, 250)" }} class="footer__menu-link" download="">
                Bilgi Toplum Hizmetleri
              </a></div>
            </div>
            <div className="col-xs-3">
              <div style={{ marginTop: "50px" }}><a href="/files/dogsan_kvkk.docx" style={{ marginTop: "50px", color: "rgb(250, 250, 250)" }} class="footer__menu-link" download="">
                Ki??isel Verilerin Korunmas?? Kanunu (KVKK)
              </a></div>
            </div>
            <div className="col-xs-6">

              <div className="col-xs-12" >
                <h1 style={{ fontWeight: "bold", color: "rgb(250, 250, 250)", textAlign: "center" }}>Site Haritas??</h1>
                <div className="col-xs-4">
                  <div ><Link to={"/Hakkimizda"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Hakk??m??zda</Link></div>
                  <div ><Link to={"/Tarihce"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Tarih??e</Link></div>
                  <div ><Link to={"/Degerler"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">De??erler</Link></div>
                  <div ><Link to={"/SosyalSorumluluk"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Sosyal Sorumluluk</Link></div>
                </div>

                <div className="col-xs-4">
                  <div ><Link to={"/Kataloglar"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Kataloglar</Link></div>
                  <div ><Link to={"/Urunler"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">??r??nler</Link></div>
                  <div ><Link to={"/Duyurular"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Duyurular</Link></div>


                </div>
                <div className="col-xs-4">
                  <div ><Link to={"/Bloglar"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Blog</Link></div>
                  <div ><Link to={"/Bayi"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Bayi</Link></div>
                  <div ><Link to={"/BizeUlasin"} style={{ color: "rgb(250, 250, 250)" }} className="nav-link">Bize Ula????n</Link></div>

                </div>

              </div>
            </div>
          </div>

          <div className="footer2-bottom">
            <div className="container">
              <a href="javascript:void(0)" className="bttop"><img src="assets/img/backtotop.jpg" alt="" /></a>
            </div>
          </div>


        </div>
      </div>
     
      <ul class="fixed-social-menu list-inline-social mb-0" >
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.facebook.com/dogsansurgical/">
            <FaFacebookF size={23} style={{ marginLeft: "-3px" }} />
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.instagram.com/dogsansurgicalsutures/">
            <FaInstagram size={23} style={{ marginLeft: "-3px" }} />
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://tr.linkedin.com/company/dogsan-surgical-sutures">
            <FaLinkedinIn size={23} style={{ marginLeft: "-3px" }} />
          </a>
        </li>
        <li>
          <a target="_blank" class="btn btn-sm btn-icon text-white" href="https://www.youtube.com/channel/UChIvINCYAyWJP9-4JOv-vXg">
            <FaYoutube size={23} style={{ marginLeft: "-3px" }} />
          </a>
        </li>
      </ul>
    </div>
  )
}