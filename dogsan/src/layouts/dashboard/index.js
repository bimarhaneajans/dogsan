 
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// DOGSAN React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { useState, useEffect, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// DOGSAN React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// DOGSAN React base styles
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import brand from "assets/images/logo-ct.png";
import routes from "../../routes";
import Header from "layouts/profile/components/Header";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
   const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
 
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  return (
    <DashboardLayout>
    <Sidenav
          color={sidenavColor}
          brand={brand}
          brandName=" DOĞSAN PANEL "
          routes={routes} 
        />
    <div style={{ marginLeft: "100px" }}>
      <Header />
       <SuiBox py={3}>
         
      
        <SuiBox mb={3}>
          <Grid container spacing={4}>
            
            <Grid item xs={12} lg={12}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SuiBox>
                  
                  </SuiBox>
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <Projects />
          </Grid>
          
        </Grid>
      </SuiBox>
      <Footer />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
