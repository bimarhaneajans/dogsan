import React, { useState, useEffect, useMemo, useRef } from "react";
import TarihceGaleriDataService from "../../services/TarihceGaleriresim.service";
import {Carousel} from '3d-react-carousal';
let slides = [];
export default function TarihceSlider() {
  const [tarihceGaleri, setTarihceGaleri] = useState([]);
 
 

   useEffect(() => {

    retrieveTarihceGaleri();
  }, []);


  const retrieveTarihceGaleri = () => {
    TarihceGaleriDataService.getFiles()
      .then(response => {
        setTarihceGaleri(response.data);
       // console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }; 

  tarihceGaleri.map(items => (   
   slides.push( <img  src={items.image} alt="1" />,)
  ));

  console.log(slides)


/* 
  slides = [ 
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img  src="https://picsum.photos/800/304/?random" alt="5" />  ]; */
    



    const callback = function(index)
    {
      console.log("callback",index);
    }
return (
  
  <div>
   <Carousel slides={slides} autoplay={true} interval={1000} onSlideChange={callback}/>
  </div>
)
}




