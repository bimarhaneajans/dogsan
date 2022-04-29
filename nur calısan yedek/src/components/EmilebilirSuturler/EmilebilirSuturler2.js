import React from 'react'
import pedesente from "./pedesente_51f39fbbfa.jpg";
import pegelak from "./pegelak_rapid_96cbb96267.jpg";
import pegesorb from "./pegesorb_d81849bab8.jpg";
import pegesorbrapid from "./pegesorb_rapid_863339e5eb.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'bootstrap';
export default function EmilebilirSuturler2() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <h2>EMİLEBİLİR SÜTÜRLER</h2>

                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={pedesente} alt="icon" />
                                <div className="info-col">
                                    <h5>Pedesente</h5>
                                    <h7>Tanım</h7>
                                    <p className="lead">PEDESENTE steril, emilebilir monofilaman cerrahi ameliyat ipliğidir. Sütür polidioksanon'dan mamuldür ve ampirik formülü (-O-CH2-CH2-OCH2-CO-)n. Polidioksanon polimeri antijen ve pirojen değildir, emilim sırasında sadece hafif doku reaksiyonu ortaya çıkar. ...</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={pegelak} alt="icon" />
                                <div className="info-col">
                                    <h5>pegelak</h5>
                                    <h7>Tanım</h7>
                                    <p>%90 glikolit ve %10 L-laktit (glikolik asit ve laktik asitten hazırlanmıştır) kopolimerlerinden sentez edilmiş esnek iplerden mamul PEGELAK rapid sentetik, emilebilir, cerrahi ameliyat iplikleri yumuşak doku yaklaştırmalarında kullanılır....</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={pegesorb} alt="icon" />
                                <div className="info-col">
                                    <h5>pegesorb</h5>
                                    <h7>Tanım</h7>
                                    <p>PEGESORB steril, emilebilir, örgülü ve kaplanmış cerrahi ameliyat ipliğidir. Ameliyat ipliği poliglikolik asitten imal edilir. Poliglikolik asitin formülü (-O-CH2-CO-O-CH2-CO-)n'dır. Sütürün örgülü yapısı kaplanmıştır....</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={pegesorbrapid} alt="icon" />
                                <div className="info-col">
                                    <h5>pegesorb rapid</h5>
                                    <h7>Tanım</h7>
                                    <p>PEGESORB rapid steril, emilebilir, örgülü ve kaplanmış cerrahi ameliyat ipliğidir. Ameliyat ipliği poliglikolik asitten imal edilir. Poliglikolik asitin formülü (-O-CH2-CO-O-CH2-CO-)n'dır....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pull-center" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <Link className="btn btn-pink pull-center"
                                    role="button" to={"/EmilebilirSuturler"} >Tümünü Göster</Link>
                            </div>

                        </div>
                    </div>


                </div></section></div>



    )
}
