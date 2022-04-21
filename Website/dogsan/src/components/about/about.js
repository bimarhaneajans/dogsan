import React from 'react'

export default function about() {
  return (
    <div><section id="about" className="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
            <h2>Our Mission</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div className="information">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                <img className="pull-center icon" src="assets/img/icons/icon-1.png" alt="icon" />
                <div className="info-col">
                  <h5>Health Information</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                <img className="pull-center icon" src="assets/img/icons/icon-2.png" alt="icon" />
                <div className="info-col">
                  <h5>Medical Education</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                <img className="pull-center icon" src="assets/img/icons/icon-3.png" alt="icon" />
                <div className="info-col">
                  <h5>Symptom Check</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                <img className="pull-center icon" src="assets/img/icons/icon-4.png" alt="icon" />
                <div className="info-col">
                  <h5>Qualified Doctors</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}
