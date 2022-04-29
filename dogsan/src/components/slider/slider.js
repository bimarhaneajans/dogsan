import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slidebbg from "../sliderimages/slide-b-bg.jpg";
import silide2 from "../assets/img/slider/slide2.jpg";


export default function slider() {
    return (
        <div className="main-wrapper">
            <div id="home">
                <div id="bg-slider-home">
                    <div id="slider-wrapper">
                        <div id="full-slider-wrapper">
                            <div id="layerslider" style={{ width: "100 %", height: "720px", maxWidth: "100%", color: "red" }}>
                                <div style={{alignSelf:"center",justifyContent:"center",margin:"center",padding:"center"}}>
                                    <Carousel
                                        autoPlay={true}
                                        dynamicHeight={true}
                                        stopOnHover={false}
                                        interval={3000}
                                        width={500}
                                        height={500}
                                        infiniteLoop
                                        showThumbs={false}
                                        showArrows={false}
                                        showIndicators={false}
                                        
                                    >
                                        <div>
                                            <img src={silide2} />
                                            <p className="legend">Legend 1</p>
                                        </div>
                                        <div>
                                            <img src={slidebbg} />
                                            <p className="legend">Legend 2</p>
                                        </div>

                                    </Carousel>
                                </div>



                                {/*      <div className="ls-slide" >
                                    <img src={slidebbg} className="ls-bg" alt="Slide background" />
                                    <img className="ls-l" style={{ top: "230px", left: "690px", whiteSpace: "nowrap" }} alt="" />
                                    <img className="ls-l" style={{ top: "100px", left: "400px", whiteSpace: "nowrap" }} />
                                        Excellence is our speciality
                                
                                    <h2 className="ls-l" style={{
                                        top: "370px",
                                        left: "110px",
                                        textTtransform: "uppercase",
                                        fontSize: "3em",
                                        marginBbottom: "20px",
                                        fontWeight: "bold",
                                        whiteSpace: "nowrap"
                                    }} >
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
                                        >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                                    </p>
                                    <h6 className="ls-l" style={{
                                        top: "500.148px",
                                        left: "244.359px",
                                        color: "#333",
                                        fontSize: ".9em",
                                        fontWeight: "bold"
                                    }}
                                        >
                                        Prices from <span style={{ fontFamily: "Open Sans", fontSize: "2em", letterSpacing: "0px", color: "#0eb2e7" }}>$50</span> for month
                                    </h6>
                                </div>
                                <div className="ls-slide" >
                                    <img src={silide2} className="ls-bg" alt="Slide background" />
                                    <h6 className="ls-l" style={{
                                        top: "310px",
                                        left: "636px",
                                        height: "40px",
                                        whiteSpace: "nowrap",
                                        color: "#0eb2e7",
                                        fontSize: ".9em",
                                        fontweight: "bold"
                                    }}
                                       >
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
                                        >
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
                                       >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris aliquipea commodo.
                                    </p>
                                    <h6 className="ls-l" style={{
                                        top: "450.148px",
                                        left: "644.359px",
                                        color: "#333",
                                        fontSize: ".9em",
                                        fontWeight: "bold"
                                    }}
                                        >
                                        Prices from <span style={{ fontFamily: "Open Sans", fontSize: "2em", letterSpacing: "0px", color: "#0eb2e7" }}>$50</span> for month
                                    </h6>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
