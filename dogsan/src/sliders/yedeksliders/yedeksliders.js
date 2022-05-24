import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BayiDataService from "../../services/BayiService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

import { Carousel } from "react-bootstrap";
import Vid1 from "./videos/vid1.mp4";
import Vid2 from "./videos/vid2.mp4";
import Vid3 from "./videos/vid3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "./VideoCarousel.css";
import SliderService from "../../services/SliderService";
import VideoPlayer from 'react-video-js-player';
import CitiesSlider from '../yedeksliders/CitiesSlider';
//import { Carousel } from 'react-responsive-carousel';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var classNames = require('classnames');
const VideoCarousel = () => {
  const [slaty, setTutorials] = useState([]);

  useEffect(() => {
    retrieveTutorials();
  }, []);


  const retrieveTutorials = () => {
    SliderService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: Vid3,
      credit: "Video by cottonbro from Pexels",
    },
  ];

  const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Russia',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
];


  return (
    <div className="App">
      <Carousel>
        {slaty.map((slider) => {
          return (
            <Carousel.Item key={slider.id}>
              {slider.type == ".jpg" ?
                ( 
                  <img src={slider.url}  width={window.innerwidth} height={600}/>
                   
                )
                :
                (
                  <ReactPlayer
                    url={slider.url}
                    pip={true}
                    controls={true}
                    playing={false}
                    width={window.innerwidth} height={750}
                  />
                )
              } 
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
