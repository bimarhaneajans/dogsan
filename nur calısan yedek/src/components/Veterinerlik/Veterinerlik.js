import React from 'react'
import veterinerlik from "./veterinerlik-single.jpg";
import "../kvc/css/styles.css";

import Navbar from 'components/navbar/navbar';

export default function Veterinerlik() {
    return (
        <div >
            <Navbar />
            <div className='container'>
            <div id="urunlarbaslık">
                    <span>VETERİNERLİK</span></div>
            {/* <div style={{ paddingTop: "10px" }} class="main-wrapper">
                    <div style={{ marginTop: "150px" }}> */}
                    
                    <div id="Group_51">
                                <div id="tektel">
                                    <span>Veterinerlik</span>
                                </div>
                                <img id="pedesente" style={{ height: "300px", width: "300px" }} src={veterinerlik} />

                                
                                
                                
                            </div>
                    </div></div>
            //     </div>
            // </div>
    
    )
}