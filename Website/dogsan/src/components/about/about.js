import React from 'react';
import icon1 from "../assets/img/icons/icon-1.png";
import icon2 from "../assets/img/icons/icon-2.png";
import icon3 from "../assets/img/icons/icon-3.png";
import icon4 from "../assets/img/icons/icon-4.png";
import Header from '../header/header';


export default function about() {

  return (
    <div >
      <Header  />

      <div style={{paddingTop:"10px"}} class="main-wrapper">
        <div id="home" >
          <section id="about" className="about" style={{ marginTop: "150px" }}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <h2>Our Mission</h2>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                  </div>
                </div>
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
          </section>
        </div>
      </div>
    </div>
  )
}
