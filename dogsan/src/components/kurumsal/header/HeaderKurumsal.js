import React from 'react';
import { Link } from "react-router-dom";
import Logo from  "./Group_2.png";

export default function HeaderKurumsal() {
	return (
		
		<div className="main-wrapper">
			<div id="home">
				<div className="container bs-main">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
							<div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={Logo} alt="Heartify" /></a></div>
							<div className="top-header hidden-xs">
								<div className="top-navigation">
									<ul className="top-nav list-unstyled list-inline">
									<li><Link to={"/Home"} className="nav-link"><img src={Logo} alt="Heartify" /></Link></li>
										<li><Link to={"/hakkimizda"} className="nav-link">Hakkımızda</Link></li>
										<li><Link to={"/tarihce"} className="nav-link">Tarihçe</Link></li>
										<li><Link to={"/degerler"} className="nav-link">Değerler</Link></li>
										<li><Link to={"/SosyalSorumluluk"} className="nav-link">Sosyal Sorumluluk</Link></li>
									</ul>
								</div>

							</div>

						</div>

					</div>
				</div>
				</div>
				</div>

				)
}
