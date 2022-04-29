import React from 'react'
import { Link } from "react-router-dom";
import Logo from  "./Group_2.png";
export default function NavbarHome() {
    return (
        <div className="main-header">
        <div className="sticky-header">
            <div className="container">
         
                {/* <div className="row">
                <div class="col-xs-8 col-sm-4 col-md-4 col-lg-4 pull-left">
                            <div class="main-logo">
                                <a href="index.html"><img src={Logo}  alt="Heartify" /></a>
                            </div>
                        </div> */}
                    <div className="col-xs-12">
                        <div className="main-navigation hidden-xs">
                            <ul className="main-nav list-unstyled list-inline pull-right">
                                <li className="active"><a href="#EmilebilirSuturler2">Emilebilir Sütürler</a></li>
                                <li><a href="#EmilmeyenSuturler2">Emilmeyen Sütürler</a></li>
                                <li><a href="#kvc2">Kvc</a></li>
                                <li><a href="#EmilebilirHemostat2">Emilebilir Hemostat</a></li>
                                <li><a href="#DentalSuturler">Dental Sütürler</a></li>
                                <li><a href="#Veterinerlik">Veterinerlik</a></li>
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
                                        <li><a href="#EmilebilirSuturler2">Emilebilir Sütürler</a></li>
                                        <li><a href="#EmilmeyenSuturler2">Emilmeyen Sütürler</a></li>
                                        <li><a href="#kvc2">Kvc</a></li>
                                        <li><a href="#EmilebilirHemostat2">Emilebilir Hemostat</a></li>
                                        <li><a href="#DentalSuturler">Dental Sütürler</a></li>
                                        <li><a href="#Veterinerlik">Veterinerlik</a></li>
                                    </ul>
                                </div>
                           
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
  
    )
}
