import React from 'react'
import daylon from "./daylon_858e4c77d9.jpg";
import ipek from "./ipek_30a8b2253a.jpg";
import politer from "./politer_7431a053f7.jpg";
import propilen from "./propilen_6ceb679e93.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'bootstrap';
export default function EmilmeyenSuturler2() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <h2>EMİLMEYEN SÜTÜRLER</h2>

                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={daylon} alt="icon" />
                                <div className="info-col">
                                    <h5>Daylon</h5>
                                    <h7>Tanım</h7>
                                    <p className="lead">DAYLON, uzun zincirli alifatik polimerlerden poliamid den elde edilmiş sentetik ve emilmeyen steril cerrahi monofilaman bir ipliktir. DAYLON mavi(FD&C Blue 2) veya siyah (Hematein Logwood siyah ) renktedir....</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row pull-center" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <Link className="btn btn-pink pull-center"
                                    role="button" to={"/EmilmeyenSuturler"} >Tümünü Göster</Link>
                            </div>

                        </div>
                    </div>


                </div></section></div>



    )
}
