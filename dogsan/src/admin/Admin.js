/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Soft UI Dashboard React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Soft UI Dashboard React routes
import routes from "../routes";
import Bayiekle from "../layouts/Bayi/Bayiekle"
import Bayiliste from "../layouts/Bayi/bayiliste"
import Bayiguncellle from "../layouts/Bayi/Bayiguncelle"
import Dashboard from "layouts/dashboard";
 import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import Navbar from "../components/navbar/navbar";
import NavbarHome from "../components/navbar/NavbarHome";
import Footer from "../components/footer/footer";
import Kataloglar from "../components/kataloglar/kataloglar";
import Kvc from "../components/kvc/kvc";
import Kvc2 from "../components/kvc/kvc2";
import EmilebilirSuturler2 from "../components/EmilebilirSuturler/EmilebilirSuturler2";
import EmilebilirSuturler from "../components/EmilebilirSuturler/EmilebilirSuturler";
import EmilmeyenSuturler from "../components/EmilmeyenSuturler/EmilmeyenSuturler";
import EmilmeyenSuturler2 from "../components/EmilmeyenSuturler/EmilmeyenSuturler2";
import EmilebilirHemostat from "../components/EmilebilirHemostat/EmilebilirHemostat";
import EmilebilirHemostat2 from "../components/EmilebilirHemostat/EmilebilirHemostat2";
import DentalSuturler from "../components/DentalSuturler/DentalSuturler";
import DentalSuturler2 from "../components/DentalSuturler/DentalSuturler2";
import Veterinerlik from "../components/Veterinerlik/Veterinerlik";
import Veterinerlik2 from "../components/Veterinerlik/Veterinerlik";
import HeaderKurumsal from "../components/kurumsal/header/HeaderKurumsal";
import Kurumsal from "../components/kurumsal/kurumsal";
import Hakkimizda from  "../components/kurumsal/hakkimizda";
import Degerler from  "../components/kurumsal/degerler";
import SosyalSorumluluk from  "../components/kurumsal/SosyalSorumluluk";
import Tarihce from "../components/kurumsal/tarihce";
import Igneler from  "../components/igneler/igneler";
import "../assets/assets/css/style.css"
import "../assets/assets/css/responsive-styling.css"
import "../assets/assets/vendor/owl-carousel/owl-carousel/owl.carousel.css"
import "../assets/assets/vendor/owl-carousel/owl-carousel/owl.theme.css"
import "../assets/assets/vendor/bootstrap/css/bootstrap.min.css"

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";

export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

 

  return  (
    <ThemeProvider theme={theme}>
    {/*   <CssBaseline />  
    {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Doğsan Panel"
            routes={routes}
          
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        
        </>
      )}

      <Routes>
        {getRoutes(routes)} 
        
      </Routes>    */}
      {/*  <Home/>  */}

         <Routes>
         <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/kvc" element={<Kvc />} />
          <Route exact path="/kvc2" element={<Kvc2/>} />
          <Route exact path="/EmilebilirSuturler" element={<EmilebilirSuturler />} />
          <Route exact path="/EmilebilirSuturler2" element={<EmilebilirSuturler2/>} />
          <Route exact path="/EmilmeyenSuturler" element={<EmilmeyenSuturler />} />
          <Route exact path="/EmilmeyenSuturler2" element={<EmilmeyenSuturler2/>} />
          <Route exact path="/EmilebilirHemostat" element={<EmilebilirHemostat />} />
          <Route exact path="/EmilebilirHemostat2" element={<EmilebilirHemostat2/>} />
          <Route exact path="/DentalSuturler" element={<DentalSuturler />} />
          <Route exact path="/DentalSuturler2" element={<DentalSuturler2/>} />
          <Route exact path="/Veterinerlik" element={<Veterinerlik />} />
          <Route exact path="/Veterinerlik2" element={<Veterinerlik2/>} />
          <Route path="/Kataloglar" element={<Kataloglar />} />
          <Route path="/HeaderKurumsal" element={<HeaderKurumsal />} />
          <Route path="/Kurumsal" element={<Kurumsal />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/Degerler" element={<Degerler />} />
          <Route path="/SosyalSorumluluk" element={<SosyalSorumluluk />} />
          <Route path="/Tarihce" element={<Tarihce />} />
          <Route path="/Igneler" element={<Igneler />} />
         
 
    {/*       <Route path="/user" element={<BoardUser />} />
          <Route path="/mod" element={<BoardModerator />} />
          
          <Route path="/admin" element={<BoardAdmin />} /> */}
        </Routes>
    </ThemeProvider>
    
  );
  
}
console.log(routes);
