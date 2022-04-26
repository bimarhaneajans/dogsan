import React, { useState, useEffect } from "react";
 
import UserService from "../services/user.service";
import Header from "../components/header/header";
import Slider from "./slider/slider";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
import Team from "../components/team/team";
function Home() {
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
        <Navbar/>
        <About/>
        <Team/>
        <Footer/>
    </div>
  );
};

export default Home;