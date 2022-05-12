import React from 'react'

import slidebbg from "../layouts/sliderimages/slide-b-bg.jpg";
import silide2 from "../assets/assets/img/slider/slide2.jpg";

/*
<link rel="shortcut icon" href="img/favicon.ico" />
  <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="img/apple-touch-icon-144x144.png" />
   <link href="http://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet" type="text/css" />
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" type="text/css" />
   
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

  <link href="assets/css/style.css" rel="stylesheet" />

  <link href="assets/css/responsive-styling.css" rel="stylesheet" />

  <link rel="stylesheet" href="assets/vendor/owl-carousel/owl-carousel/owl.carousel.css" />
  <link rel="stylesheet" href="assets/vendor/owl-carousel/owl-carousel/owl.theme.css" />

  <link href="assets/css/YTPlayer.css" media="all" rel="stylesheet" />
  <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css" />
  
  
*/
import "../../src/sliders/assets/vendor/owl-carousel/owl-carousel/owl.theme.css"
import "../../src/sliders/assets/vendor/owl-carousel/owl-carousel/owl.carousel.css"
import "../../src/sliders/assets/css/style.css"
import "../../src/sliders/assets/css/font-awesome.min.css"

import "../../src/sliders/assets/css/responsive-styling.css"
import "../../src/sliders/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../src/sliders/assets/vendor/layerslider/css/layerslider.css"
import "../../src/sliders/assets/css/YTPlayer.css"

/* import "../../src/sliders/assets/css/YTPlayer.css"
 */

function slider() {
  return (  
    <div>
      <div> 
 
  <div className="main-wrapper">
    <div id="home">
      <div id="bg-slider-home">
        <div id="slider-wrapper">
          <div id="full-slider-wrapper">
            <div id="layerslider" style={{width: '100%', height: '720px', maxWidth: '100%'}}>
              <div className="ls-slide" data-ls="slidedelay:8000;transition2d:4;">
                <img src="sliderimages/slide-b-bg.jpg" className="ls-bg" alt="Slide background" />
                <img className="ls-l" style={{top: '230px', left: '690px', whiteSpace: 'nowrap'}} data-ls="offsetxin:50;durationin:2000;delayin:800;offsetxout:50;durationout:1000;parallaxlevel:1;" src="sliderimages/ldoctor.png" alt="" />
                <img className="ls-l" style={{top: '100px', left: '400px', whiteSpace: 'nowrap'}} data-ls="offsetxin:100;durationin:2000;delayin:1200;offsetxout:100;durationout:1000;parallaxlevel:3;" src="sliderimages/gdoctor.png" alt="" />
                <h6 className="ls-l" style={{top: '350px', left: '236px', height: '40px', whiteSpace: 'nowrap', color: '#0eb2e7', fontSize: '.9em', fontWeight: 'bold'}} data-ls="
							durationin:2000;
							delayin:2000;
							rotatein:20;
							rotatexin:30;
							scalexin:1.5;
							scaleyin:1.5;
							transformoriginin:
							left 50% 0;
							durationout:750;
							rotateout:20;
							rotatexout:-30;
							scalexout:0;
							scaleyout:0;
							transformoriginout:left 50% 0;">
                  Excellence is our speciality
                </h6>
                <h2 className="ls-l" style={{top: '370px', left: '110px', textTransform: 'uppercase', fontSize: '3em', marginBottom: '20px', fontWeight: 'bold', whiteSpace: 'nowrap'}} data-ls="
							offsetxin:0;
							durationin:2000;
							delayin:2300;
							rotateyin:90;
							skewxin:60;
							transformoriginin:25% 50% 0;
							offsetxout:100;
							durationout:750;
							skewxout:60;">
                  Genius in Healthcare
                </h2>
                <p className="ls-l" style={{top: '435.68px', left: '43.359px', fontSize: '13.8141px', padding: '0px 29.6016px', color: '#6A6A6A', lineHeight: '24.668px', width: '600px', height: 'auto', marginLeft: '0px', marginTop: '0px', opacity: 1, visibility: 'visible', textAlign: 'center'}} data-ls="
							durationin:2000;
							delayin:2800;
							rotatein:20;
							rotatexin:30;
							scalexin:1.5;
							scaleyin:1.5;
							transformoriginin:left 50% 0;
							durationout:750;
							rotateout:20;
							rotatexout:-30;
							scalexout:0;
							scaleyout:0;
							transformoriginout:left 50% 0;">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                </p>
                <h6 className="ls-l" style={{top: '500.148px', left: '244.359px', color: '#333', fontSize: '.9em', fontWeight: 'bold'}} data-ls="
							offsetxin:0;
							durationin:2000;
							delayin:3200;
							rotateyin:90;
							skewxin:60;
							transformoriginin:25% 50% 0;
							offsetxout:100;
							durationout:750;
							skewxout:60;">
                  Prices from <span style={{fontFamily: '"Open Sans"', fontSize: '2em', letterSpacing: '0px', color: '#0eb2e7'}}>$50</span> for month
                </h6>
              </div>
              <div className="ls-slide" data-ls="slidedelay:9500;transition2d:5;timeshift:-1500;">
                <img src="assets/img/slider/slide2.jpg" className="ls-bg" alt="Slide background" />
                <h6 className="ls-l" style={{top: '310px', left: '636px', height: '40px', whiteSpace: 'nowrap', color: '#0eb2e7', fontSize: '.9em', fontWeight: 'bold'}} data-ls="
							offsetxin:50;
							durationin:3000;
							rotateyin:60;
							transformoriginin:right 50% 0;
							offsetxout:-50;
							durationin:700;
							delayin:900;
							rotateyout:-60;
							transformoriginout:left 50% 0;">
                  Excellence is our speciality
                </h6>
                <h2 className="ls-l" style={{top: '320px', left: '510px', textTransform: 'uppercase', fontSize: '3em', marginBottom: '20px', fontWeight: 'bold', whiteSpace: 'nowrap'}} data-ls="
							offsetxin:0;
							durationin:700;
							delayin:1300;
							rotateyin:90;
							skewxin:60;
							transformoriginin:25% 50% 0;
							offsetxout:100;
							durationout:750;
							skewxout:60;">
                  Genius in Healthcare
                </h2>
                <p className="ls-l" style={{top: '385.68px', left: '443.359px', fontSize: '13.8141px', padding: '0px 29.6016px', color: '#6A6A6A', lineHeight: '24.668px', width: '600px', height: 'auto', marginLeft: '0px', marginTop: '0px', opacity: 1, visibility: 'visible', textAlign: 'center'}} data-ls="
							durationin:900;
							delayin:1700;
							rotatein:20;
							rotatexin:30;
							scalexin:1.5;
							scaleyin:1.5;
							transformoriginin:left 50% 0;
							durationout:750;
							rotateout:20;
							rotatexout:-30;
							scalexout:0;
							scaleyout:0;
							transformoriginout:left 50% 0;">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                </p>
                <h6 className="ls-l" style={{top: '450.148px', left: '644.359px', color: '#333', fontSize: '.9em', fontWeight: 'bold'}} data-ls="
							offsetxin:0;
							durationin:1100;
							delayin:2000;
							rotateyin:90;
							skewxin:60;
							transformoriginin:25% 50% 0;
							offsetxout:100;
							durationout:750;
							skewxout:60;">
                  Prices from <span style={{fontFamily: '"Open Sans"', fontSize: '2em', letterSpacing: '0px', color: '#0eb2e7'}}>$50</span> for month
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

     {/*   <div className="container bs-main">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
            <div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src="assets/img/logo/heartify-logo.png" alt="Heartify" /></a></div>
             <div className="top-header hidden-xs">
              <div className="top-navigation">
                <ul className="top-nav list-unstyled list-inline">
                  <li className="active"><a href="#home">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#team">Team</a></li>
                  <li className="logo"><a href="index.html"><img src="assets/img/logo/heartify-logo.png" alt="Heartify" /></a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
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
              <div className="col-xs-8 col-sm-4 col-md-4 col-lg-4 pull-left">
                <div className="main-logo">
                  <a href="index.html"><img className="pull-left" src="assets/img/logo/heart-icon.png" alt="Heartify" /><span>HEARTIFY</span></a>
                </div>
              </div>
              <div className="col-xs-4 col-sm-8 col-md-8 col-lg-8">
                <div className="main-navigation hidden-xs">
                  <ul className="main-nav list-unstyled list-inline pull-right">
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
                 <nav className="navbar navbar-default hidden-sm hidden-md hidden-lg" role="navigation">
                  <div className="container-fluid">
                     <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                     <div className="collapse navbar-collapse" id="navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                      </ul>
                    </div>
                   </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>   */}
        
    
 
    </div>
  </div> 
 
</div>

    </div> 
  )
}

export default slider