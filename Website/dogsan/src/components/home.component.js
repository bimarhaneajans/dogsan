import React, { Component } from "react";

import UserService from "../services/user.service";
import Header from "../components/header/header";
import Slider from "./slider/slider";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import About from "../components/about/about";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Slider/>
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    );
  }
}
