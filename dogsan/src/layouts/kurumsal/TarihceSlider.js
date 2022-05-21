import React, { useState, useEffect, useMemo, useRef } from "react";
import { Carousel } from '@sefailyasoz/react-carousel'
/* import "./carasel.css" */
import TarihceGaleriDataService from "../../services/TarihceGaleriresim.service";

export default function TarihceSlider() {
    const [tarihceGaleri, setTarihceGaleri] = useState([]);
useEffect(() => {

    retrieveTarihceGaleri();
}, []);


const retrieveTarihceGaleri = () => {
    TarihceGaleriDataService.getFiles()
        .then(response => {
            setTarihceGaleri(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
};


  return (
    <div><Carousel
    data={tarihceGaleri}
    autoPlay={true}

    animationDuration={3000}
    headerTextType="black"
    subTextType="white"
    size="normal"
/></div>
  )
}
