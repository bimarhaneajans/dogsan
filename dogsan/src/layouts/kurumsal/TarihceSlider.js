import React, { useState, useEffect, useMemo, useRef } from "react";
import { Carousel } from 'react-carousel-minimal';
import TarihceGaleriDataService from "../../services/TarihceGaleriresim.service";
const data=[{image:"",caption:""}];
export default function TarihceSlider() {
const [tarihceGaleri, setTarihceGaleri] = useState([]);

useEffect(() => {

    retrieveTarihceGaleri();
}, []);


const retrieveTarihceGaleri = () => {
   

    TarihceGaleriDataService.getFiles()
        .then(response => { 
          const gelen = response.data
     
           /*  for(let i=0; i<gelen.length;i++){
                data[i] = [{"image":gelen[i].image,"caption":gelen[i].caption}];
                console.log(data)
            } */
           /// console.log(data)
            setTarihceGaleri(gelen);
              
        })
        .catch(e => {
            console.log(e);
        });
};
       /*  for(let i=0; i<tarihceGaleri.length;i++){
        data[i] = [
                {
                        image:tarihceGaleri[i].image,caption:tarihceGaleri[i].caption
                }
            ]; 
            
                console.log(data)
            }  */
           /// console.log(data)





const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div>
     <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />


    </div>
  )
}