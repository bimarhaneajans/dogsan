import "../yedeksliders/style.css";
//import "../yedeksliders/styles.css";
import React, { Component } from 'react'
import VideoPlayer from 'react-video-js-player';
import { Carousel } from 'react-responsive-carousel';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import LightGallery from 'lightgallery/react';
 
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var classNames = require('classnames');




export default class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 40000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };


  }
  player = {}

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slaty;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
  onPlayerReady(player) {
    // console.log("Player is ready: ", player);
    this.player = player;
  }

  onVideoPlay(duration) {
    //  console.log("Video played at: ", duration);
  }

  onVideoPause(duration) {
    //  console.log("Video paused at: ", duration);
  }

  onVideoTimeUpdate(duration) {
    // console.log("Time updated: ", duration);
  }

  onVideoSeeking(duration) {
    //  console.log("Video seeking: ", duration);
  }

  onVideoSeeked(from, to) {
    // console.log(`Video seeked from ${from} to ${to}`);
  }

  onVideoEnd() {
    // console.log("Video ended");
  }

  /*
  /*  {}?:{}  
            
           // console.log(JSON.stringify(veri)),
           <VideoPlayer
           controls={true}
           src={veri.src}
           //poster={this.state.video.poster}
           width={window.innerwidth}
           height="720"
           onReady={this.onPlayerReady.bind(this)}
           onPlay={this.onVideoPlay.bind(this)}
           onPause={this.onVideoPause.bind(this)}
           onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
           onSeeking={this.onVideoSeeking.bind(this)}
           onSeeked={this.onVideoSeeked.bind(this)}
           onEnd={this.onVideoEnd.bind(this)}
       />
          /* 
  
  */
  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (<LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
   {/*  <a
                    className="gallery-item"
                    data-src="https://www.youtube.com/watch?v=lSCHU3kwrm8"
                    key="4"
                  >
                    <img
                      style={{ maxWidth: '400px' }}
                      className="img-responsive"
                      alt=""
                      src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
                    />
                  </a> */}
                  <a
                    data-lg-size="1406-1390"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
                  >
                    <img
                      className="img-responsive"
                      src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                    />
                  </a>
                  <a
                    data-lg-size="1400-1400"
                    data-pinterest-text="Shinimamiya, Osaka, Japan"
                    data-tweet-text="Shinimamiya, Osaka, Japan"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
                  >
                    <img
                      className="img-responsive"
                      src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                    />
                  </a>
                  <a
                    data-lg-size="1400-1400"
                    className="gallery-item"
                    data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
                  >
                    <img
                      className="img-responsive"
                      src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
                    />
                  </a>
                
                </LightGallery>
      // <div className={classNames('slider', { 's--ready': sliderReady })}>
      //   <p className="slider__top-heading">Travelers</p>
      //   <div className="slider__slides">
 



      //     {this.props.slaty.map((slide, index) => (
      //       <div
      //         className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
      //         key={index}
      //       >
      //         <div className="slider__slide-content">
      //           <h3 className="slider__slide-subheading">{/* {slaty.country || slaty.city} */}</h3>
      //           <h2 className="slider__slide-heading">
      //             {slide.name.split('').map(l => <span>{l}</span>)}
      //           </h2>

      //         </div>
      //         <div className="slider__slide-parts">
      //           <div className="slider__slide-part"> {/* key={i} */}
      //             <div className="slider__slide-part-inner"
      //             //style={{ backgroundImage: `url(${slide.url})` }} 
      //             />
      //             {/*   {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                          
                          
                          
      //                   ))}*/}
      //             <div>
                    
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     ))}
      //   </div>


      //   <div className="slider__control" onClick={() => this.changeSlides(-1)} />
      //   <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      // </div>
    );
  }
}

