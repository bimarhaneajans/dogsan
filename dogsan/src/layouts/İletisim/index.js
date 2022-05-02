 
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
 

// Overview page components
import Header from "layouts/profile/components/Header";
  

function Overview() {
   return (
    <DashboardLayout>
      <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Soft UI Dashboard"
            routes={routes} 
          />
      <Header />
    
    </DashboardLayout>
  );
}

export default Overview;
