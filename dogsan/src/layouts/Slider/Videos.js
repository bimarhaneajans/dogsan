import React, { useState, useEffect, useMemo, useRef } from "react";
 import VideoService from "../../services/VideoService";
 import ReactPlayer from 'react-player'
 

 export default function Videos() {  
  const [Videos, setVideo] = useState([]);
 
  useEffect(() => {

    retrieveVideo();
  }, []);
  
  const retrieveVideo = () => {
    VideoService.getAll()
      .then(response => {
        setVideo(response.data);
        console.log(response.data);

      })
      .catch(e => {
        console.log(e);
      });
  }; 

  //const data=["http://localhost:3000/resources/static/assets/videos/trailer_hd.mp4","https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"]
 
  return (
    <div>
<ReactPlayer
    loop
    
    auto
    controls
    width={window.innerWidth}
    height={window.innerHeight/2+200}
    url={data} />
      
    </div>

  )
}






 