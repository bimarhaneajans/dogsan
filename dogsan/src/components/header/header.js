import React from 'react';
import { Link } from "react-router-dom";
import Logo from "./Group_2.png";

export default function header() {
	return (
		<div className="main-wrapper">
			<div id="home">
				<div className="container bs-main">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
							<div className="logo hidden-sm hidden-md hidden-lg"><a href="index.html"><img src={Logo} alt="Heartify" /></a></div>

							<div className="top-header hidden-xxl ">
								<div className="top-navigation">
									<ul className="top-nav list-unstyled list-inline">



										<li><Link to={"/hakkimizda"} className="nav-link">Kurumsal</Link></li>
										<li><Link to={"/kataloglar"} className="nav-link">Kataloglar</Link></li>
										<li><Link to={"/igneler"} className="nav-link">İğneler</Link></li>
										<li><Link to={"/Home"} className="nav-link"><img src={Logo} alt="Heartify" /></Link></li>
										<li><Link to={"/duyurular"} className="nav-link">Duyurular</Link></li>
										<li><Link to={"/blog"} className="nav-link">Blog</Link></li>
										<li><Link to={"/iletisim"} className="nav-link">İletişim</Link></li>
										<li><Link to={"/dashboard"} className="nav-link">Admin</Link></li>


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
