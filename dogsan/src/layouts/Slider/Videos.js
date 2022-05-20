import React from "react";

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.playNext = this.playNext.bind(this);
    this.state = { current: 0, 
   
        videos: [
        {
          description:
            "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
          sources:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          subtitle: "By Blender Foundation",
          thumb: "images/BigBuckBunny.jpg",
          title: "Big Buck Bunny"
        },
        {
          description: "The first Blender Open Movie from 2006",
          sources:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          subtitle: "By Blender Foundation",
          thumb: "images/ElephantsDream.jpg",
          title: "Elephant Dream"
        },
        {
          description:
            "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
          sources:
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          subtitle: "By Google",
          thumb: "images/ForBiggerBlazes.jpg",
          title: "For Bigger Blazes"
        }
      ]
    };
  }
  playNext() {
    this.setState({ current: this.state.current + 1 });
  }
  render() {
    return (
      <div> 
        
          <video
            src={this.state.videos[this.state.current].sources}
            autoPlay
            loop
            width={window.innerWidth}
            //controls
          />
        
      </div>
    );
  }
}