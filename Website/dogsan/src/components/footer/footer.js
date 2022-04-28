import React from 'react'
import Logo from  "./Group_2.png";
export default function footer() {
  return (
    <div><div className="footer2">
    <img src={Logo} alt="" />
  </div>


  <div className="footer2-bottom">
    <div className="container">
      <div className="col-md-6">
        <p>www.dogsan.com.tr</p>
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
      <a href="javascript:void(0)" className="bttop"><img src="./assets/img/backtotop.jpg" alt="" /></a>
    </div>
  </div></div>
  )
}
