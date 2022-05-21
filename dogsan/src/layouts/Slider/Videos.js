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

  const data=["https://www.youtube.com/watch?v=XtLOdudCJBI"]
 
  return (
    <div>
<ReactPlayer
    //loop
    auto
    controls
    width={window.innerWidth}
    height={window.innerHeight/2+200}
    url={data} />
      
    </div>

  )
}






 