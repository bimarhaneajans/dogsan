import React from "react";
import Carousel from "react-multi-carousel";

import Video from "./Video";

const responsive = {
  doesntmatter: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
};
// i search on youtube "scene" and these are what showed up.
const videos = ["MkKO-Z_Sjm4", "ltCVlrOyt5k", "Kc7Oe7e08pU", "idvqLiOeLgc"];

class WithVideo extends React.Component {
  render() {
    return (
      <Carousel swipeable={false} draggable={false} responsive={responsive}>
        {videos.map(id => {
          return <Video id={id} key={id} />;
        })}
      </Carousel>
    );
  }
}

export default WithVideo;
