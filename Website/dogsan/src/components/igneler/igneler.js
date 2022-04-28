import React from 'react'
import Header from "../header/header";
import yuvarlak from "./yuvarlak_cb5282c131.jpg";
import diskeskin from "./dis_keskin_3e7041238c.jpg";
import ickeskin from "./ic_keskin_1f8f558118.jpg";
import kd from "./kd_4669ca9edc.jpg";


export default function igneler() {
  return (
    
    <div style={{ paddingTop: "10px" }} class="main-wrapper">
    <Header/>
      <div id="home" >
        <section id="about" className="about" style={{ marginTop: "100px" }}>

          <div className="container">
          <div className="information">
            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                  <img className="pull-center" style={{ height: "100px", width: "auto" }} src={yuvarlak} alt="icon" />
                  <h5>YUVARLAK</h5>
                  
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                  <img className="pull-center icon" style={{ height: "100px", width: "auto" }} src={ickeskin} alt="icon" />
                  <h5>İÇ KESKİN</h5>
                 
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                  <img className="pull-center icon" style={{ height: "100px", width: "auto" }} src={diskeskin} alt="icon" />
                  <h5>DIŞ KESKİN</h5>
                  
                </div>
              </div>
            </div>

            <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                  <img className="pull-center icon" style={{ height: "100px", width: "auto" }} src={kd} alt="icon" />
                  <h5>KD</h5>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  
  )
}
