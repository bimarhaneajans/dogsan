import React from 'react'
import dental from "./dental-suturler-single.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'bootstrap';
export default function DentalSuturler2() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <h2>DENTAL SÜTÜRLER</h2>

                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={dental} alt="icon" />
                            </div>
                            
                    </div>
                    <div className="row pull-center" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <Link className="btn btn-pink pull-center"
                                    role="button" to={"/DentalSuturler"} >Tümünü Göster</Link>
                            </div>

                        </div>
                    </div>
                    </div>


                </div></section></div>



    )
}
