import React, { useState, useEffect, useMemo, useRef } from "react";
import { Carousel } from "react-bootstrap"; 
import ReactPlayer from "react-player";
/*  import "bootstrap/dist/css/bootstrap.css"; */
  import "./bootstrap.slider.css" 
/* import "./VideoCarousel.css";  */
import SliderService from "../services/SliderService";
import CitiesSlider from './CitiesSlider.js';

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
            <Carousel.Item key={slider.id}>
              {slider.type == ".jpg" ?
                ( 
                  <img src={slider.url}  width={"100%"} height={"100%"}/>
                   
                )
                :
                (
                  <ReactPlayer
                    url={slider.url}
                    pip={true}
                    controls={true}
                    playing={false}
                    width={"100%"} height={"100%"}
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
