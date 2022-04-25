import React from 'react'

export default function contact() {
  return (
    <div> <section id="twitter-feed">
    <div className="video-bg-overlay"></div>
    <div className="video-bg">

      <div className="video-container1">
        <iframe src="http://player.vimeo.com/video/96635299?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1" width="100" height="300"></iframe>
      </div>

    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 text-center">
          <div className="tweet-section">
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
  </section>
  <section id="contact">
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
                <p className="clinic-add">The Ronins Clinic<br></br>Suit 109,200 Broadway Avenue West Beach SA 5024, Australia</p>
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
  </section></div>
  )
}
