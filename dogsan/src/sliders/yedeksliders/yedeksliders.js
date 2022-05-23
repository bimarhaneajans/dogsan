import "../yedeksliders/style.css";
//import "../yedeksliders/styles.css";
import React, { Component } from 'react'
import VideoPlayer from 'react-video-js-player';
import { Carousel } from 'react-responsive-carousel';
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
            return (
              <div className={classNames('slider', { 's--ready': sliderReady })}>
                <p className="slider__top-heading">Travelers</p>
                <div className="slider__slides">
                  {this.props.slaty.map((slide, index) => (
                    <div
                      className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                      key={index}
                      >
                      <div className="slider__slide-content">
                        <h3 className="slider__slide-subheading">{/* {slaty.country || slaty.city} */}</h3>
                        <h2 className="slider__slide-heading">
                          {slide.name.split('').map(l => <span>{l}</span>)}
                        </h2>
                       
                      </div>
                      <div className="slider__slide-parts">
                      <div className="slider__slide-part"> {/* key={i} */}
                      <div className="slider__slide-part-inner" 
                      //style={{ backgroundImage: `url(${slide.url})` }} 
                      /> 
                       {/*   {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                          
                          
                          
                        ))}*/}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
              </div>
            );
          }
}

