import React from 'react'

import "../kvc/css/styles.css";
import dental from "./dental-suturler-single.jpg";

import Navbar from 'components/navbar/navbar';

export default function DentalSuturler() {
    return (
        <div >
            <Navbar />
            <div className='container'>
            <div id="urunlarbaslık">
                    <span></span></div>
            {/* <div style={{ paddingTop: "10px" }} class="main-wrapper">
                    <div style={{ marginTop: "150px" }}> */}
                    
                    <div id="Group_51">
                    
                                <img id="pedesente" style={{ height: "300px", width: "300px" }} src={dental} />

                                <div id="tektel">
                                    <span>dental</span>
                                </div>
                                <svg class="Line_1" viewBox="0 0 412 1">
                                    <path id="Line_1" d="M 0 0 L 412 0">
                                    </path>
                                </svg>
                                <svg class="Ellipse_2">
                                    <ellipse id="Ellipse_2" rx="7.5" ry="7.5" cx="7.5" cy="7.5">
                                    </ellipse>
                                </svg>
                                <div id="R">
                                    <span>R</span>
                                </div>
                            </div>
                    </div></div>
            //     </div>
            // </div>
    
    )
}