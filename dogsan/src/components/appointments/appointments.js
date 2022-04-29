import React from 'react'

export default function appointments() {
  return (
    <div><section id="g-map">
    <div id="map"></div>
    <div className="row">
      <div className="container">
        <div className="col-md-6">
          <div className="app-form">
            <form className="appointment-form">
              <h4>Appointments form</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid</p>
              <label>NAME AND SURNAME</label>
              <input type="text" placeholder="Enter your name and surname"/>
                <label>EMAIL ADDRESS</label>
                <input type="text" placeholder="Enter email address"/>
                  <label>MESSAGE</label>
                  <textarea rows="10" placeholder="Enter your message"></textarea>
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
          </div>
        </div>
      </div>
  </section></div>
  )
}
