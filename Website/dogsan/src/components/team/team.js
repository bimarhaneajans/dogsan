import React from 'react'
import Header from '../header/header'
export default function team() {
  return (<div>
    <Header  />
    <div style={{paddingTop:"10px"}} class="main-wrapper">
    <div id="home" >
    <section id="team" style={{ marginTop: "150px" }}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-md-offset-2">
          <div className="team-stat text-center">
            <h2>Meet Them All</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="team-filter-nav text-center">
            <ul id="filters" className="filter-nav list-inline list-unstyled">
              <li><a data-filter="*" className="current" href="#">All</a></li>
              <li><a data-filter=".general" href="#">General</a></li>
              <li><a data-filter=".specialist" href="#">Specialist</a></li>
              <li><a data-filter=".laboratory" href="#">Laboratory</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
        <div className="row">
          <div id="container" className="container team-detail">
            <div className="item general col-md-6">
              <div className="team-member">
                <a data-toggle="modal" data-target="#myModal">
                  <div className="team-img">
                    <img src="./assets/img/team/team-member1.jpg" className="img-responsive" alt="" />
                  </div>
                </a>
                <div className="member-details">
                  <h6>clinic Manager</h6>
                  <h4>Frank Rooney</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                  <div className="member-social">
                    <h6>Social Profiles</h6>
                    <ul className="list-inline list-unstyled pull-right social">
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item laboratory col-md-6">
              <div className="team-member">
                <a data-toggle="modal" data-target="#myModal">
                  <div className="team-img">
                    <img src="./assets/img/team/team-member2.jpg" className="img-responsive" alt="" />
                  </div>
                </a>
                <div className="member-details">
                  <h6>clinic Manager</h6>
                  <h4>Frank Rooney</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                  <div className="member-social">
                    <h6>Social Profiles</h6>
                    <ul className="list-inline list-unstyled pull-right social">
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item specialist col-md-6">
              <div className="team-member">
                <a data-toggle="modal" data-target="#myModal">
                  <div className="team-img">
                    <img src="./assets/img/team/team-member3.jpg" className="img-responsive" alt="" />
                  </div>
                </a>
                <div className="member-details">
                  <h6>clinic Manager</h6>
                  <h4>Frank Rooney</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                  <div className="member-social">
                    <h6>Social Profiles</h6>
                    <ul className="list-inline list-unstyled pull-right social">
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item laboratory col-md-6">
              <div className="team-member">
                <a data-toggle="modal" data-target="#myModal">
                  <div className="team-img">
                    <img src="./assets/img/team/team-member4.jpg" className="img-responsive" alt="" />
                  </div>
                </a>
                <div className="member-details">
                  <h6>clinic Manager</h6>
                  <h4>Frank Rooney</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod </p>
                  <div className="member-social">
                    <h6>Social Profiles</h6>
                    <ul className="list-inline list-unstyled pull-right social">
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
          <div className="pagination-section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                  <p className="pull-left">Showing <span>1-4</span> of 16 doctors</p>
                  <ul className="pagination pull-right">
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&raquo;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div></div></div>
  )
}
