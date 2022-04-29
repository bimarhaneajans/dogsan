import React from 'react'
import propilen from "./propilen.png";
import kvc_tektel from  "./kvc_tektel.png";
import kvc_politer from "./kvc_politer.png";
import daxton from "./daxton.png";
import group2 from "./Group_2.png";
import dopace from  "./dopace.png";
import "../kvc/css/styles.css";

import Navbar from 'components/navbar/navbar';

export default function kvc() {
    return (
        <div >
            <Navbar />
            
           
            {/* <div style={{ paddingTop: "10px" }} class="main-wrapper">
                    <div style={{ marginTop: "150px" }}> */}
                    <div id="Group_51">
                    <span>KVC</span>
                                <img id="kvc_tektel" src={kvc_tektel} />

                                <div id="TEKTEL_steril_ISO_5832_Blm-1_C">
                                    <span>TEKTEL, steril ISO 5832 Bölüm-1 "Cerrahi İmplantlar için metalik malzemeler" standardına uygun 316L sınıfı paslanmaz çelik telden oluşan, emilebilir olmayan steril cerrahi paslanmaz çelik tel sütürdur.Cerrahi paslanmaz çelik teller Avrupa Farmakopesinde (E.P.) ve Amerikan Farmakopesinde (U.S.P.) emilebilir olmayan cerrahi iplikler için kabul edilmiş olan tüm gereklilikleri sağlar. Cerrahi paslanmaz çelik teller ayrıca Brown & Sharpe Gauge (B&S) veya American Wire Gauge (AWG) sınıflandırmaları ile de adlandırılabilir.</span>
                                </div>
                                <div id="Cerrahi_paslanmaz_elik_tel_yar">
                                    <span>Cerrahi paslanmaz çelik tel, yara kapanmalarında emilmeyen sütür olarak, örneğin karın yaralarının kapanmasında, herni (fıtık), sternum (göğüs kemiği) kapanması ve kırık kemiklerin birleşmesini ve tendonların düzeltilmesi gibi ortopedik prosedürlerde ve serkilaj cerrahide kullanılır. Sadece tek kullanımlıktır.</span>
                                </div>
                                <div id="Cerrahi_paslanmaz_elik_tel_emi">
                                    <span>Cerrahi paslanmaz çelik tel emilebilir değildir ve dokuda minimal akut enfilamasyon reaksiyon gösterebilir.</span>
                                </div>
                                <div id="TEKTEL_batn_yaralarnn_kapanmas">
                                    <span>TEKTEL, batın yaralarının kapanması, fıtık onarımı, sternum (göğüs kemiği) kapanması, serklaj ve tendon onarımı gibi ortopedik prosedürlerde güvenli doku yaklaştırması sağlar. TEKTEL, dokuda minimal akut enfilamasyon reaksiyon gösterir.</span>
                                </div>
                                <div id="TANIM">
                                    <span>TANIM</span>
                                </div>
                                <div id="KULLANIM_AMACI">
                                    <span>KULLANIM AMACI</span>
                                </div>
                                <div id="KLNK_PERFORMANS_ZELLKLER">
                                    <span>KLİNİK PERFORMANS ÖZELLİKLERİ</span>
                                </div>
                                <div id="KLNK_FAYDA">
                                    <span>KLİNİK FAYDA</span>
                                </div>
                                <div id="tektel">
                                    <span>tektel</span>
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
                    </div>
            //     </div>
            // </div>
    
    )
}