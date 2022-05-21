 
import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
   
class VideoApp extends Component {
    player = {}
    state = { 
      DataisLoaded: false,
      items: [],
        video: {
            src: "/video.mp4",
            poster: "/1.png"
        }
    }
   
    onPlayerReady(player){
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
            <div>{  
              this.state.items.map((item) => ( 
                <VideoPlayer key = { item.id }
                playing
                    controls={true}
                    src={item.src}
                   // poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                />    ))
              }
            </div>
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
   




 