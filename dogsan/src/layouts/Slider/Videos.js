import React, { useState, useEffect, useMemo, useRef } from "react";
import videoConnect from 'react-html5video';
import VideoService from "../../services/VideoService";

import Video from "react-h5-video";
 

export default function Videos() {
  const [Videos, setVideo] = useState([]);

  useEffect(() => {
    retrieveTutorials();

  }, []);

  const retrieveTutorials = () => {
    VideoService.getAll()
      .then(response => {
      setVideo(Videos);
        console.log(Videos);

      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Video sources={""}/> 
  )
}
 