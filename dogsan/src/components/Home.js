

import React, { useState, useEffect } from "react";
 
import UserService from "../services/user.service";
import Header from "../components/header/header";
import Slider from "./slider/slider";
import Navbar from "../components/navbar/navbar";
import NavbarHome from "../components/navbar/NavbarHome";
import Footer from "../components/footer/footer";
import Kvc from "../components/kvc/kvc";
import Kvc2 from "../components/kvc/kvc2";
import EmilebilirSuturler2 from "./EmilebilirSuturler/EmilebilirSuturler2";
import EmilebilirSuturler from "./EmilebilirSuturler/EmilebilirSuturler";
import EmilmeyenSuturler from "./EmilmeyenSuturler/EmilmeyenSuturler";
import EmilmeyenSuturler2 from "./EmilmeyenSuturler/EmilmeyenSuturler2";
import EmilebilirHemostat from "./EmilebilirHemostat/EmilebilirHemostat";
import EmilebilirHemostat2 from "./EmilebilirHemostat/EmilebilirHemostat2";
import DentalSuturler from "./DentalSuturler/DentalSuturler";
import DentalSuturler2 from "./DentalSuturler/DentalSuturler2";
import Veterinerlik from "./Veterinerlik/Veterinerlik";
import Veterinerlik2 from "./Veterinerlik/Veterinerlik2";
import "../assets/assets/css/style.css"
import "../assets/assets/css/responsive-styling.css"
import "../assets/assets/vendor/owl-carousel/owl-carousel/owl.carousel.css"
import "../assets/assets/vendor/owl-carousel/owl-carousel/owl.theme.css"
import "../assets/assets/vendor/bootstrap/css/bootstrap.min.css"
/* import "../assets/assets/css/YTPlayer.css"
 */function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const data =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(data);
      }
    );
  }, []);

  return (
    <div className="container">
  


      
        <Header/>
        <Slider/>
        <NavbarHome/>
        <EmilebilirSuturler2/>
        <EmilmeyenSuturler2/>
        <Kvc2/>
        <EmilebilirHemostat2/>
        <DentalSuturler2/>
        <Veterinerlik2/>
        <Footer/>  
    </div>
  );
};

export default Home;
