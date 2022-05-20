import React from "react";
import { render } from "react-dom";
 import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
 // 1140 x 2158 dosya resim olducleri
const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
     image: "https://i.imgur.com/ZXBtVw7.jpg",
 
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
     image: "https://i.imgur.com/DCdBXcq.jpg",
  
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
     image: "https://i.imgur.com/DvmN8Hx.jpg",
 
  }
];

 
export default function slider() {
  return (
    <div>
 
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
             <div dangerouslySetInnerHTML={{ __html: item.title }}  ></div>
             <div dangerouslySetInnerHTML={{ __html: item.description }}  ></div>
            
          </div>
           
        </div>
      ))}
    </Slider>
    
  </div>
  )
}

