import React from 'react'

export default function doctor() {
  return (
    <div><section id="doctor-info">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
          <div className="blog-stat text-center">
            <h2>Visit to the doctor</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <form className="appointment-form">
            <h4>Appointments form</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
            <label>NAME AND SURNAME</label>
            <input type="text" placeholder="Enter your name and surname"/>
              <label>CONTACT PHONE NUMBER</label>
              <input type="text" placeholder="Enter phone number"/>
                <label>PATIENT NUMBER</label>
                <input type="text" placeholder="Enter patient number"/>
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
                      <input type="checkbox"/><span>send me copy of message</span>
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
      </section></div>
  )
}
