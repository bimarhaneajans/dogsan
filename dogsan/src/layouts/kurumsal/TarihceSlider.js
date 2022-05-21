import React, { useState, useEffect, useMemo, useRef } from "react";

import TarihceGaleriDataService from "../../services/TarihceGaleriresim.service";
import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
import AwesomeSliderStyles from '../scss/fold-out-animation.scss';
import "../assets/css/style.css"; // burasi
export default function TarihceSlider() {
  const [tarihceGaleri, setTarihceGaleri] = useState([]);

 

   useEffect(() => {

    retrieveTarihceGaleri();
  }, []);


  const retrieveTarihceGaleri = () => {
    TarihceGaleriDataService.getFiles()
      .then(response => {
        setTarihceGaleri(response.data);
        console.log(response.json());
      })
      .catch(e => {
        console.log(e);
      });
  }; 

return (
  <div>
   <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    cssModule={AwesomeSliderStyles}
  >
    <div data-src={tarihceGaleri} />
    
  </AutoplaySlider>

  </div>
)
}




