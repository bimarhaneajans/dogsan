
import React, { Component,Fragment } from 'react';
import VideoPlayer from 'react-video-js-player';
import Carousel from "react-multi-carousel";

import "./WithScrollbar.css";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import UAParser from "ua-parser-js";
import Simple from "./Simple";
import WithScrollbar from "./WithScrollbar";
import WithVideo from "./WithVideo.js";
import Section from "./Section";
 
const responsive = {
  doesntmatter: {
    state : { additionalTransfrom: 0 },

    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};
class VideoApp extends Component {
  player = {}
  state = {
    DataisLoaded: false,
    items: [],
    status: true,

  }

  onPlayerReady(player) {
    this.player = player;
  }
  componentDidMount() {
    fetch("http://localhost:3000/video/files")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    return (
      <Carousel swipeable={false} draggable={false} responsive={responsive}>
       
       {this.state.items.map(id => {
          return <VideoPlayer key={id} id={id}
          playing
          controls={true}
          src={id.src}
          width={window.innerWidth}
          height={window.innerHeight/2+150}
        // onReady={this.onPlayerReady.bind(this)}
       />;
        })}

       


      </Carousel>
    );
  }
}
export default VideoApp;
/* import React, { useState, useEffect, useMemo, useRef } from "react";
 import VideoService from "../../services/VideoService";
 import ReactPlayer from 'react-player'
 import JPlayer, {
  initializeOptions, Gui, SeekBar, BufferBar,
  Poster, Video, Title, FullScreen, Mute, Play, PlayBar, Repeat,
  VolumeBar, PlaybackRateBar, Duration, CurrentTime, BrowserUnsupported,
} from 'react-jplayer';

const defaultOptions = {
  id: 'VideoPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    artist: 'peach.blender',
    title: 'Big Buck Bunny Trailer',
    sources: {
      m4v: 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
      ogv: 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
      webmv: 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm',
    },
    poster: 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
   /*  tracks: [
      {
        default: true,
        kind: 'subtitles',
        src: subtitles,
        label: 'Video Subtitles',
        srclang: 'en',
      },
    ], 
  },
};

initializeOptions(defaultOptions);

 export default function VideoPlayer() {  
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
 
  return ( <ReactPlayer
    loop
    playing
    auto
    controls
    width={window.innerWidth}
    height={window.innerHeight/2+200}
    url={[  {src: Videos.url, type: Videos.tipi},]}
  />  
  )
}
*/
{/* <JPlayer id={defaultOptions.id} className="jp-sleek">
    <div className="jp-media-container">
      <Poster />
      <Video />
    </div>
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play><i className="fa">{/* Icon set in css  </i></Play>
        <Repeat><i className="fa fa-repeat" /></Repeat>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa"> </i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <PlaybackRateBar />
        <div className="jp-title-container">
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlayer> 
      
    </div>*/}





