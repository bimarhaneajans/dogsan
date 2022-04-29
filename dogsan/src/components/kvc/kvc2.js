import React from 'react'
import kvc_tektel from "./kvc_tektel.png";
import kvc_politer from "./kvc_politer.png";
import daxton from "./daxton.png";
import dopace from "./dopace.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from 'bootstrap';
export default function kvc2() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <h2>KVC</h2>

                            </div>
                        </div>
                    </div>
                    <div className="information">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={kvc_tektel} alt="icon" />
                                <div className="info-col">
                                    <h5>tektel</h5>
                                    <h7>Tanım</h7>
                                    <p className="lead">TEKTEL, steril ISO 5832 Bölüm-1 "Cerrahi İmplantlar için metalik malzemeler" standardına uygun 316L sınıfı paslanmaz çelik telden oluşan, emilebilir olmayan steril cerrahi paslanmaz çelik tel sütürdur...</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={kvc_politer} alt="icon" />
                                <div className="info-col">
                                    <h5>politer</h5>
                                    <h7>Tanım</h7>
                                    <p>Polyester filamentinin örülmesinden elde edilen sütur kapilaritenin azalması için kaplanmıştır...</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={dopace} alt="icon" />
                                <div className="info-col">
                                    <h5>dopace</h5>
                                    <h7>Tanım</h7>
                                    <p>DOPACE geçici epikradiyal kalp pili veya kalp pili ile izleme için harici bir pacemaker ile miyokard arasında iletken bir bağlantı sağlar ve geçici pace sonlandırıldıktan sonra kolayca çıkarılabilir...</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 text-center">
                                <img className="pull-center icon" style={{ height: "100px", width: "100px" }} src={daxton} alt="icon" />
                                <div className="info-col">
                                    <h5>daxton</h5>
                                    <h7>Tanım</h7>
                                    <p>daxton®-D genel olarak yumuşak doku yakınlaştırması ve/veya bağlanmasında, kardiyovasküler, cerrahide ve dura mater onarımında güvenli kullanım sağlar. daxton®-D dokuda minimum inflamasyon reaksiyonuna yol açmayı amaçlar...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pull-center" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                                <Link className="btn btn-pink pull-center"
                                    role="button" to={"/kvc"} >Tümünü Göster</Link>
                            </div>

                        </div>
                    </div>


                </div></section></div>



    )
}
