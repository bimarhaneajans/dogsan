import React, { useState, useEffect, useMemo, useRef } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import slidebbg from "../sliders/sliderimages/slide-b-bg.jpg";
import silide2 from "../sliders/assets/img/slider/slide2.jpg";
import gdoctor from "../layouts/sliderimages/gdoctor.png";
import ldoctor from "../layouts/sliderimages/ldoctor.png";


function Slider() {

  
/*   useEffect(() => {
    $("#layerslider").layerSlider({
      responsive: false,
      responsiveUnder: 1280,
      layersContainer: 1280,
      pauseOnHover: false,
      autoPlayVideos: false,
     // skinsPath: '../src/sliders/assets/vendor/layerslider/skins/'
    });
  }, []);  
 */
  useEffect(() => {
    $('.bttop').on(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
  }, []);  
  
  return (<div className="main-wrapper" >
    <div id="home">
      <div id="bg-slider-home">
        <div id="slider-wrapper">

          <div id="full-slider-wrapper">
            <div id="layerslider" style={{ width: "100 %", height: "720px", maxWidth: "100%", color: "red" }}>
              <div className="ls-slide" data-ls={{ slidedelay: "8000", transition2d: "4" }}>
                <img src={slidebbg} style={{ width: "120 %", height: "220px", maxWidth: "100%", }} />
                <img className="ls-l" style={{ top: "230px", left: "690px", whiteSpace: "nowrap" }} data-ls={{ offsetxin: "50", durationin: "2000", delayin: "800", offsetxout: "50", durationout: "1000", parallaxlevel: "1" }} src={ldoctor} alt="" />
                <img className="ls-l" style={{ top: "100px", left: "400px", whiteSpace: "nowrap" }} data-ls={{ offsetxin: "100", durationin: "2000", delayin: "1200", offsetxout: "100", durationout: "1000", parallaxlevel: "3" }} src={gdoctor} alt="" />
                <h6 className="ls-l" style={{ top: "350px", left: "236px", height: "40px", whiteSpace: "nowrap", color: "#0eb2e7", fontSize: ".9em", fontWeight: "bold" }} data-ls={{ durationin: "2000", delayin: "2000", rotatein: "20", rotatexin: "30", scalexin: "1.5", scaleyin: "1.5", transformoriginin: "left 50% 0", durationout: "750", rotateout: "20", rotatexout: "-30", scalexout: "0", scaleyout: "0", transformoriginout: "left 50% 0" }}>
                  Excellence is our speciality
                </h6>
                <h2 className="ls-l" style={{
                  top: "370px",
                  left: "110px",
                  textTtransform: "uppercase",
                  fontSize: "3em",
                  marginBbottom: "20px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap"
                }} data-ls={{
                  offsetxin: "0",
                  durationin: "2000",
                  delayin: "2300",
                  rotateyin: "90",
                  skewxin: "60",
                  transformoriginin: "25% 50% 0",
                  offsetxout: "100",
                  durationout: "750",
                  skewxout: "60"
                }}>
                  Genius in Healthcare
                </h2>
                <p className="ls-l" style={{
                  top: "435.68 px",
                  left: "43.359 px",
                  fontSize: "13.8141 px",
                  padding: "0px 29.6016 px",
                  color: "#6A6A6A",
                  lineHeight: "24.668px",
                  width: "600px",
                  height: "auto",
                  marginLeft: "0px",
                  marginTop: "0px",
                  opacity: "1",
                  visibility: "visible",
                  textAlign: "center"
                }}
                  data-ls={{
                    durationin: "2000",
                    delayin: "2800",
                    rotatein: "20",
                    rotatexin: "30",
                    scalexin: "1.5",
                    scaleyin: "1.5",
                    transformoriginin: "left 50% 0",
                    durationout: "750",
                    rotateout: "20",
                    rotatexout: "-30",
                    scalexout: "0",
                    scaleyout: "0",
                    transformoriginout: "left 50% 0"
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                </p>
                <h6 className="ls-l" style={{
                  top: "500.148px",
                  left: "244.359px",
                  color: "#333",
                  fontSize: ".9em",
                  fontWeight: "bold"
                }}
                  data-ls={{
                    offsetxin: "0",
                    durationin: "2000",
                    delayin: "3200",
                    rotateyin: "90",
                    skewxin: "60",
                    transformoriginin: "25% 50% 0",
                    offsetxout: "100",
                    durationout: "750",
                    skewxout: "60"
                  }}>
                  Prices from <span style={{ fontFamily: "Open Sans", fontSize: "2em", letterSpacing: "0px", color: "#0eb2e7" }}>$50</span> for month
                </h6>
              </div>
              <div className="ls-slide" data-ls={{ slidedelay: "9500", transition2d: "5", timeshift: "-1500" }}>
                <img src={silide2} width={300} />
                <h6 className="ls-l" style={{
                  top: "310px",
                  left: "636px",
                  height: "40px",
                  whiteSpace: "nowrap",
                  color: "#0eb2e7",
                  fontSize: ".9em",
                  fontweight: "bold"
                }}
                  data-ls={{
                    offsetxin: "50",
                    durationin: "3000",
                    rotateyin: "60",
                    transformoriginin: "right 50% 0",
                    offsetxout: "-50",
                    durationin: "700",
                    delayin: "900",
                    rotateyout: "-60",
                    transformoriginout: "left 50% 0"
                  }}>
                  Excellence is our speciality
                </h6>
                <h2 className="ls-l" style={{
                  top: "320px",
                  left: "510px",
                  textTransform: "uppercase",
                  fontSize: "3em",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap"
                }}
                  data-ls={{
                    offsetxin: "0",
                    durationin: "700",
                    delayin: "1300",
                    rotateyin: "90",
                    skewxin: "60",
                    transformoriginin: "25% 50% 0",
                    offsetxout: "100",
                    durationout: "750",
                    skewxout: "60"
                  }}>
                  Genius in Healthcare
                </h2>
                <p className="ls-l" style={{
                  top: "385.68px",
                  left: "443.359px",
                  fontSize: "13.8141px",
                  padding: "0px 29.6016px",
                  color: "#6A6A6A",
                  lineHeight: "24.668px",
                  width: "600px",
                  height: "auto",
                  marginLeft: "0px",
                  marginTop: "0px",
                  opacity: "1",
                  visibility: "visible",
                  textAlign: "center"
                }}
                  data-ls={{
                    durationin: "900",
                    delayin: "1700",
                    rotatein: "20",
                    rotatexin: "30",
                    scalexin: "1.5",
                    scaleyin: "1.5",
                    transformoriginin: "left 50% 0",
                    durationout: "750",
                    rotateout: "20",
                    rotatexout: "-30",
                    scalexout: "0",
                    scaleyout: "0",
                    transformoriginout: "left 50% 0"
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                </p>
                <h6 className="ls-l" style={{
                  top: "450.148px",
                  left: "644.359px",
                  color: "#333",
                  fontSize: ".9em",
                  fontWeight: "bold"
                }}
                  data-ls={{
                    offsetxin: "0",
                    durationin: "1100",
                    delayin: "2000",
                    rotateyin: "90",
                    skewxin: "60",
                    transformoriginin: "25% 50% 0",
                    offsetxout: "100",
                    durationout: "750",
                    skewxout: "60"
                  }}>
                  Prices from <span style={{ fontFamily: "Open Sans", fontSize: "2em", letterSpacing: "0px", color: "#0eb2e7" }}>$50</span> for month
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Slider;