

import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import typography from "../../assets/theme/base/typography";
import HakkimizdaDataService from "../../services/HakkimizdaService";
import logo from "../assets/img/logo/heartify-logo.png";
import logo2 from "../assets/img/logo/heartify-logo-lite.png";
import bir from "../assets/img/blog/1.jpg";
import author from "../assets/img/xtra/author.png";
import xtra1 from "../assets/img/xtra/1.jpg";
import xtra2 from "../assets/img/xtra/2.jpg";
import xtra3 from "../assets/img/xtra/3.jpg";
import avatar from "../assets/img/xtra/avatar.jpg";
import caticon1 from "../assets/img/cat-ico1.png";
import caticon2 from "../assets/img/cat-ico1.png";
import caticon3 from "../assets/img/cat-ico1.png";
import rposts1 from "../assets/img/rposts/1.jpg";
import rposts2 from "../assets/img/rposts/1.jpg";
import rposts3 from "../assets/img/rposts/1.jpg";
import backtotop from "../assets/img/backtotop.jpg"
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css"; // burasi
import "../assets/vendor/owl-carousel/owl-carousel/owl.carousel.css";
import "../assets/vendor/owl-carousel/owl-carousel/owl.theme.css";
import "../style.css";
import "../responsive-styling.css";

import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player'

export default function Kataloglar() {
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




    const setActiveTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial);
        setCurrentIndex(index);
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
                                            <li className="logo"><Link to={"/"} className="nav-link"><img src={logo2} alt="Heartify" /></Link></li>
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
                    {hakkimizda.map(item => (
                        <div key={item.id} className="col-md-9">
                            <article>
                                <img src={item.Resim} className="img-responsive" alt="" />
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                <p>{item.AnaIcerik}</p>
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                <div className="reactPly" >
                                    <ReactPlayer url={item.BelgeselVideoUrl} />
                                </div>

                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                <p>{item.BelgeselIcerigi}</p>
                                <div className="bottom-space-30"></div>
                                <div className="clearfix"></div>
                                {/* <div className="row">
                        <div className="col-md-7">
                            <p className="bold">Caveats worth mentioning</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam. Mauris hendrerit, diam non commodo laoreet, est elit volutpat mauris, vel vehicula nisl orci id nibh. Pellentesque mollis convallis condimentum.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="post-quote">
                                <h4>"You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality."</h4>
                            </div>
                        </div>
                    </div> 
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam. Mauris hendrerit, diam non commodo laoreet, est elit volutpat mauris, vel vehicula nisl orci id nibh. Pellentesque mollis convallis condimentum. Curabitur scelerisque tincidunt metus, non rutrum sem egestas et. Quisque hendrerit nec arcu sed pharetra. Duis nec aliquet massa, sed dapibus mauris. Nulla vehicula nisl non enim sodales fermentum. Morbi in diam elementum, egestas magna et, interdum</p>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam. Mauris hendrerit, diam non commodo laoreet, est elit volutpat mauris, vel vehicula nisl orci id nibh. Pellentesque mollis convallis condimentum. Curabitur scelerisque tincidunt metus, non rutrum sem egestas et. Quisque hendrerit nec arcu sed pharetra. Duis nec aliquet massa, sed dapibus mauris. Nulla vehicula nisl non enim sodales fermentum. Morbi in diam elementum, egestas magna et, interdum</p>
                    <div className="bottom-space-30"></div>
                    <div className="clearfix"></div>
                     <ul className="tags-list">
                        <li><a href="#">Ronin</a></li>
                        <li><a href="#">Clinic</a></li>
                        <li><a href="#">Informations</a></li>
                        <li><a href="#">Doctors</a></li>
                        <li><a href="#">Disease</a></li>
                    </ul> */}
                                {/*  <div className="sharepost">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Share this Post</h4>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                                {/* <div className="author-info">
                        <img src={author} alt="" className="img-responsive"/>
                        <h5><em>Author:</em> The Ronins</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus ante lectus, tincidunt tincidunt dui a, rhoncus interdum est. Sed molestie quis augue ac pulvinar. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                    </div>
                    <div className="related-posts">
                        <h5>Related Posts</h5>
                        <div className="row">
                            <ul>
                                <li>
                                    <img src={xtra1} className="img-responsive" alt=""/>
                                    <h4><a href="#">Standard Post format with Picture slider</a></h4>
                                    <span className="post-meta">Posted 22.06.2014 at 18:00h by <a href="#">The Ronins</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus.</p>
                                </li>
                                <li>
                                    <img src={xtra2} className="img-responsive" alt=""/>
                                    <h4><a href="#">Standard Post format with Picture slider</a></h4>
                                    <span className="post-meta">Posted 22.06.2014 at 18:00h by <a href="#">The Ronins</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus.</p>
                                </li>
                                <li>
                                    <img src={xtra3} className="img-responsive" alt=""/>
                                    <h4><a href="#">Standard Post format with Picture slider</a></h4>
                                    <span className="post-meta">Posted 22.06.2014 at 18:00h by <a href="#">The Ronins</a></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl convallis tempus.</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                            </article>
                            {/*     <div className="comments">
                    <h4>Post has 3 comments</h4>
                    <ul>
                        <li>
                            <img src={avatar} alt=""/>
                            <div className="comments-info">
                                <h6>Bob Marley <span>/ Posted 22.06.2014 in 18:00h</span> <em><a href="#">Reply</a></em></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl conva llis tempus. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                            </div>
                        </li>
                        <li>
                            <img src={avatar} alt=""/>
                            <div className="comments-info">
                                <h6>Michael <span>/ Posted 22.06.2014 in 18:00h</span> <em><a href="#">Reply</a></em></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl conva llis tempus. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                            </div>
                        </li>
                        <li>
                            <img src={avatar} alt=""/>
                            <div className="comments-info">
                                <h6>Victor <span>/ Posted 22.06.2014 in 18:00h</span> <em><a href="#">Reply</a></em></h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante eget nisl conva llis tempus. Pellentesque egoists sed tortor egestas pretium. Nam eget fermentum tellus, et fermentum diam.</p>
                            </div>
                        </li>
                    </ul>
                </div> */}
                            {/* <div className="comment-form">
                    <h4>Leave a comment</h4>
                    <form id="comment-form">
                        <div className="row">
                            <div className="col-md-4">
                                <input type="text" placeholder="Name*"/>
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="Surname*"/>
                            </div>
                            <div className="col-md-4">
                                <input type="email" placeholder="Email address"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <textarea rows="5" placeholder="Your comment*"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className="col-md-5">
                                <button type="submit">Submit Comment</button>
                            </div>
                        </div>
                    </form>
                </div> */}
                        </div>))}
                    <aside className="col-md-3">
                        {/*   <div className="side-content">
                    <h5>Main Categories</h5>
                    <ul className="cat">
                        <li>
                            <h4>TARİHÇE</h4>
                        </li>
                        <li>
                            <h4>DEĞERLER</h4>
                        </li>
                        <li>
                            <h4>SOSYAL SORUMLULUK</h4>
                        </li>
                    </ul>
                </div> */}
                        {/* <div className="side-content">
                    <h5>KURUMSAL</h5>
                    <ul className="list1">
                    <li><Link to={"/Tarihce"} className="nav-link">TARİHÇE</Link></li>
                    <li><Link to={"/Degerler"} className="nav-link">DEĞERLER</Link></li>
                    <li><Link to={"/SosyalSorumluluk"} className="nav-link">SOSYAL SORUMLULUK</Link></li>
                    </ul>
                </div> */}
                        {/* <div className="side-content">
                    <h5>Join the newsletter</h5>
                    <p>Join the 1000+ others and subscribe. We promise You won't recive any spam from us!</p>
                    <form className="side-newsletter">
                        <input type="text" placeholder="Type your email address"/>
                    </form>
                </div>
                <div className="side-content">
                    <h5>Recent Posts</h5>
                    <ul className="rposts">
                        <li>
                            <img src={rposts1} alt=""/>
                            <h6><a href="#">This is standard post with slider</a></h6>
                            <span>22.06.2014 at 18:00h</span>
                        </li>
                        <li>
                            <img src={rposts2} alt=""/>
                            <h6><a href="#">This is standard post with slider</a></h6>
                            <span>22.06.2014 at 18:00h</span>
                        </li>
                        <li>
                            <img src={rposts3} alt=""/>
                            <h6><a href="#">This is standard post with slider</a></h6>
                            <span>22.06.2014 at 18:00h</span>
                        </li>
                    </ul>
                </div>
                <div className="side-content">
                    <h5>Tags</h5>
                    <ul className="tags-list">
                        <li><a href="#">Ronin</a></li>
                        <li><a href="#">Clinic</a></li>
                        <li><a href="#">Informations</a></li>
                        <li><a href="#">Doctors</a></li>
                        <li><a href="#">Disease</a></li>
                        <li><a href="#">Treatment</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Schedule</a></li>
                    </ul>
                </div> */}
                    </aside>
                </div>
            </div>

            <div className="footer2">
                <img src={logo2} alt="" />
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
                    <a href="javascript:void(0)" className="bttop"><img src={backtotop} alt="" /></a>
                </div>
            </div>
        </div>

    )

}
