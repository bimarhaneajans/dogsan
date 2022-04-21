import React from 'react';
import {Link } from "react-router-dom";

export default function header() {
  return (
    <div className="container bs-main">
		<div className="row">
			<div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
				<div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src="./assets/img/logo/heartify-logo.png" alt="Heartify" /></a></div>
			
				<div className="top-header hidden-xs">
					<div className="top-navigation">
						<ul className="top-nav list-unstyled list-inline">
							<li className="active"><a href="#home">Home</a></li>
							<li><a href="#about">About Us</a></li>
							<li><a href="#team">Team</a></li>
							<li><a href="#pricing">Pricing</a></li>
              <li className="logo"><a href="index.html"><img src="./assets/img/logo/heartify-logo.png" alt="Heartify" /></a></li>
							<li><a href="#blog">Blog</a></li>
							<li><a href="#contact">Contact</a></li>
              <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
              <li className="nav-item"><Link to={"/register"} className="nav-link">Sign Up</Link></li>

						</ul>
					</div>
			
				</div>
				
			</div>
		
		</div>
    </div>
    
  )
}
