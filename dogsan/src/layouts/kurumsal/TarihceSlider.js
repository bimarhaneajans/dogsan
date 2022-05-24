import React, { useState, useEffect, useMemo, useRef } from "react"; 

import { Carousel } from "react-bootstrap"; 
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "./VideoCarousel.css";
import SliderService from "../../services/TarihiGaleriService"; 

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
  
 


  return (
    <div className="App">
      <Carousel>
        {slaty.map((slider) => {
          return (
            <Carousel.Item interval={1000} controls key={slider.id}>
            
                <img src={slider.image}  width={1024} height={720}/> 
              
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
