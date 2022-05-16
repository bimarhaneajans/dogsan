
import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// DOGSAN components
import SuiBox from "components/SuiBox";

// DOGSAN examples
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// DOGSAN themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// DOGSAN routes
import routes from "../routes";
import Home from "../layouts/Home";
import dynamickategori from "../layouts/Kategori/dynamickategori";

// DOGSAN contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import Bayiguncelle from "../layouts/Bayi/Bayiguncelle"
import SubKategoriguncelle from "../layouts/SubKategori/SubKategoriguncelle"
import Blogguncelle from "../layouts/Blog/Blogguncelle"
import Degerguncelle from "../layouts/Deger/Degerguncelle"
import Duyuruguncelle from "../layouts/Duyuru/Duyuruguncelle"
import Etkinlikguncelle from "../layouts/Etkinlik/Etkinlikguncelle"
import Hakkimizdaguncelle from "../layouts/Hakkimizda/Hakkimizdaguncelle"
import Iletisimguncelle from "../layouts/İletisim/İletisimguncelle"
import Igneguncelle from "../layouts/igne/igneguncelle"
import Katalogguncelle from "../layouts/Katalog/Katalogguncelle"
import Mesajlarguncelle from "../layouts/Mesajlar/Mesajlarguncelle"
import Kategoriguncelle from "../layouts/Kategori/Kategoriguncelle"
import Sehirguncelle from "../layouts/Sehir/Sehirguncelle"
import Sliderguncelle from "../layouts/Slider/Sliderguncelle"
import Sosyalssguncelle from "../layouts/Sosyalss/Sosyalssguncelle"
import Tarihceguncelle from "../layouts/Tarihce/Tarihceguncelle"
import TarihiGaleriguncelle from "../layouts/TarihiGaleri/TarihiGaleriguncelle"
import Urunguncelle from "../layouts/Urun/Urunguncelle"
import Yoneticinguncelle from "../layouts/Yoneticiler/Yoneticiguncelle"

import Dynamickategori from "../layouts/Kategori/dynamickategori"
import SubDynamickategori from "../layouts/Kategori/subdynamickategori"
import Subdynamicdetaykategori from "../layouts/Kategori/subdynamicdetaykategori";
import Dynamicdetaykategori from "../layouts/Kategori/dynamicdetaykategori";
import SinglePost from "../layouts/SinglePost";

import Hakkimizda from "../layouts/kurumsal/Hakkimizda";
import Tarihce from "../layouts/kurumsal/Tarihce";
import Degerler from "../layouts/kurumsal/Degerler";
import SosyalSorumluluk from "../layouts/kurumsal/SosyalSorumluluk";
import Kataloglar from "layouts/kataloglar/Kataloglar";
import Duyuru from "layouts/Duyurular/Duyuru";
import Duyurular from "layouts/Duyurular/Duyurular";
import Igneler from "layouts/İgneler/Igneler";
import Bloglar from "layouts/Bloglar/Bloglar";
import BizeUlasin from "layouts/İletisimler/BizeUlasin";
import Bayiler from "layouts/İletisimler/Bayiler";
 





export default function App() {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

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



  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName=" DOĞSAN PANEL "
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />

          </>
        )}
        {layout === "dashboard" && <Configurator />}
        <Routes>

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "home" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName=" DOĞSAN PANEL "
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}
      {layout === "Home"}
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Home />} />
        <Route path="/bayiguncelle/:id" element={<Bayiguncelle />} />
        <Route path="/Blogguncelle/:id" element={<Blogguncelle />} />
        <Route path="/Degerguncelle/:id" element={<Degerguncelle />} />
        <Route path="/Duyuruguncelle/:id" element={<Duyuruguncelle />} />
        <Route path="/Etkinlikguncelle/:id" element={<Etkinlikguncelle />} />
        <Route path="/Hakkimizdaguncelle/:id" element={<Hakkimizdaguncelle />} />
        <Route path="/Iletisimguncelle/:id" element={<Iletisimguncelle />} />
        <Route path="/Igneguncelle/:id" element={<Igneguncelle />} />
        <Route path="/Katalogguncelle/:id" element={<Katalogguncelle />} />
        <Route path="/Kategoriguncelle/:id" element={<Kategoriguncelle />} />
        <Route path="/Mesajlarguncelle/:id" element={<Mesajlarguncelle />} />
        <Route path="/Sehirguncelle/:id" element={<Sehirguncelle />} />
        <Route path="/Sliderguncelle/:id" element={<Sliderguncelle />} />
        <Route path="/Sosyalssguncelle/:id" element={<Sosyalssguncelle />} />
        <Route path="/Tarihceguncelle/:id" element={<Tarihceguncelle />} />
        <Route path="/TarihiGaleriguncelle/:id" element={<TarihiGaleriguncelle />} />
        <Route path="/Urunguncelle/:id" element={<Urunguncelle />} />
        <Route path="/SubKategoriguncelle/:id" element={<SubKategoriguncelle />} />
        <Route path="/Dynamickategori" element={<Dynamickategori />} />
        <Route path="/Dynamicdetaykategori" element={<Dynamicdetaykategori />} />
        <Route path="/SubDynamickategori/:id" element={<SubDynamickategori />} />
        <Route path="/Subdynamicdetaykategori/:kategoriid" element={<Subdynamicdetaykategori />} />
        <Route path="/yoneticiguncelle/:id" element={<Yoneticinguncelle />} />
   
        <Route path="/SinglePost" element={<SinglePost />} />
        <Route path="/Hakkimizda" element={<Hakkimizda />} />
        <Route path="/Tarihce" element={<Tarihce />} />
        <Route path="/Degerler" element={<Degerler />} />
        <Route path="/SosyalSorumluluk" element={<SosyalSorumluluk />} />
        <Route path="/Kataloglar" element={<Kataloglar />} />
        <Route path="/Duyurular" element={<Duyurular />} />
        <Route path="/Duyuru/:id" element={<Duyuru />} />
        <Route path="/Igneler" element={<Igneler />} />
        <Route path="/Bloglar" element={<Bloglar />} />
        <Route path="/BizeUlasin" element={<BizeUlasin />} />
        <Route path="/Bayiler" element={<Bayiler />} />
        <Route path="/Home" element={<Home />} />

      </Routes>
    </ThemeProvider>
  );
} 