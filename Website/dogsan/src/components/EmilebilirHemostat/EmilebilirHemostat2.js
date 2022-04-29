import React from 'react'

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'bootstrap';
import kanstat from "./kanstat_36c807a6f5.jpg";
export default function EmilebilirHemostat2() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <h2>EMİLEBİLİR HEMOSTAT</h2>

                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={kanstat} alt="icon" />
                                <div className="info-col">
                                    <h5>kanstat®</h5>
                                    <h6>Tanım</h6>
                                    <p className="lead">kanstat® emilebilir hemostat, rejenere selülozun kontrollü oksitlenmesiyle hazırlanan steril emilebilir tıbbi tekstil malzemesidir. Beyaz uçuk sarı gölgeli renktedir ve karamele benzer hafif bir kokusu vardır....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pull-center" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <Link className="btn btn-pink pull-center"
                                    role="button" to={"/EmilebilirHemostat"} >Tümünü Göster</Link>
                            </div>

                        </div>
                    </div>


                </div></section></div>



    )
}
