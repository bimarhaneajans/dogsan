import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./Group_2.png";
export default function navbar() {
    return (
        <div className="main-header">
            <div className="sticky-header">
                <div className="container">
                    <div className="row">
                        <div class="col-xs-8 col-sm-4 col-md-4 col-lg-4 pull-left">
                            <div class="main-logo">
                                <a href="/home"><img src={Logo} alt="Heartify" /></a>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-8 col-md-8 col-lg-8">
                            <div className="main-navigation hidden-xs">
                                <ul className="main-nav list-unstyled list-inline pull-right">
                                    <li className="active"><Link to={"/EmilebilirSuturler"} className="nav-link">Emilebilir Sütürler</Link></li>
                                     <li><Link to={"/EmilmeyenSuturler"} className="nav-link">Emilmeyen Sütürler</Link></li>
                                     <li><Link to={"/kvc"} className="nav-link">Kvc</Link></li>
                                     <li><Link to={"/EmilebilirHemostat"} className="nav-link">Emilebilir Hemostat</Link></li>
                                     <li><Link to={"/DentalSuturler"} className="nav-link">Dental Sütürler</Link></li>
                                     <li><Link to={"/Veterinerlik"} className="nav-link">Veterinerlik</Link></li>
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
                                            <li className="active"><Link to={"/EmilebilirSuturler"} className="nav-link">Emilebilir Sütürler</Link></li>
                                            <li><Link to={"/EmilmeyenSuturler"} className="nav-link">Emilmeyen Sütürler</Link></li>
                                            <li><Link to={"/kvc"} className="nav-link">Kvc</Link></li>
                                            <li><Link to={"/EmilebilirHemostat"} className="nav-link">Emilebilir Hemostat</Link></li>
                                            <li><Link to={"/DentalSuturler"} className="nav-link">Dental Sütürler</Link></li>
                                            <li><Link to={"/Veterinerlik"} className="nav-link">Veterinerlik</Link></li>
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
