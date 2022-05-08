 
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
import Home from "../layouts/Home";
import dynamickategori from "../layouts/Kategori/dynamickategori";

// Soft UI Dashboard React contexts
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import Bayiguncelle from "../layouts/Bayi/Bayiguncelle" 
import Blogguncelle from "../layouts/Blog/Blogguncelle"
import Degerguncelle  from "../layouts/Deger/Degerguncelle"
import Duyuruguncelle  from "../layouts/Duyuru/Duyuruguncelle"
import Etkinlikguncelle  from "../layouts/Etkinlik/Etkinlikguncelle"
import Hakkimizdaguncelle  from "../layouts/Hakkimizda/Hakkimizdaguncelle"
import Iletisimguncelle  from "../layouts/İletisim/İletisimguncelle"
import Igneguncelle  from "../layouts/igne/igneguncelle"
import Katalogguncelle  from "../layouts/Katalog/Katalogguncelle"
import Mesajlarguncelle  from "../layouts/Mesajlar/Mesajlarguncelle"
import Kategoriguncelle  from "../layouts/Kategori/Kategoriguncelle"
import Sehirguncelle from "../layouts/Sehir/Sehirguncelle"
import Sliderguncelle  from "../layouts/Slider/Sliderguncelle"
import Sosyalssguncelle  from "../layouts/Sosyalss/Sosyalssguncelle"
import Tarihceguncelle  from "../layouts/Tarihce/Tarihceguncelle"
import TarihiGaleriguncelle  from "../layouts/TarihiGaleri/TarihiGaleriguncelle"
import Urunguncelle  from "../layouts/Urun/Urunguncelle"
 import Dynamickategori from "../layouts/Kategori/dynamickategori"
 import SubDynamickategori from "../layouts/Kategori/subdynamickategori"
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

  const configsButton = (
    <SuiBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SuiBox>
  );

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
            <Configurator />
            {configsButton}
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
          <Configurator />
          {configsButton}
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
        <Route path="/kategoriler" element={<Dynamickategori />} />
        <Route path="/kategori/:id" element={<SubDynamickategori />} />
      </Routes>
    </ThemeProvider>
  );
} 