import React from 'react'

export default function content() {
  return (
    <div>
    <div className="modal fade" id="myModal" role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-6 no-padding">
                  <img src="./assets/img/team/1.png" className="img-responsive" alt="" />
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

      </div> 
      </div></div>
  )
}
