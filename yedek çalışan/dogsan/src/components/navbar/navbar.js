import React from 'react'

export default function navbar() {
  return (
    <div className="main-header">
    <div className="sticky-header">
        <div className="container">
            <div className="row">
            <div class="col-xs-8 col-sm-4 col-md-4 col-lg-4 pull-left">
						<div class="main-logo">
							<a href="index.html"><img src="./assets/img/logo/heartify-logo.png" alt="Heartify" /><span>HEARTIFY</span></a>
						</div>
					</div>
                <div className="col-xs-4 col-sm-8 col-md-8 col-lg-8">
                    <div className="main-navigation hidden-xs">
                        <ul className="main-nav list-unstyled list-inline pull-right">
                            <li className="active"><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
               
                    <nav className="navbar navbar-default hidden-sm hidden-md hidden-lg" role="navigation">
                        <div className="container-fluid">
                         
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                </button>
                            </div>
                           
                            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#pricing">Pricing</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                       
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
