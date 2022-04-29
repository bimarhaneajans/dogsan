import React from 'react'
import HeaderKurumsal from './header/HeaderKurumsal';
import tarih from "./1970-tr.svg";
import takim from  "./takim.jpg";
import musteri from "./musteri.jpg";
import kalite from "./kalite.jpg";
import surekli from "./surekli.jpg";


export default function degerler() {
  return (
    <div><div >
    <HeaderKurumsal/>
      <div style={{paddingTop:"10px"}} class="main-wrapper">
        <div id="home" >
        <section id="about" className="about" style={{ marginTop: "100px" }}>
  
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center" style={{ height:"100px",width:"auto"}} src={musteri} alt="icon" />
                    <h5>MÜŞTERİ ODAKLILIK</h5>
                    <p className="lead">Müşterilerimizi anlamanın; “Cerrahlar”, “Hemşireler” ve bayilerin ihtiyaçlarını karşılamanın sorumluluğunu taşırız… Modern cerrahi değişimlerinin gereği olarak, Doğsan deneyimi ve müşteri odaklılığı ile teknolojimizi ve ürün yelpazemizi, cerrahların ve hemşirelerin ihtiyaçlarına göre uyumlaştırırız.

</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" style={{ height:"100px",width:"auto"}} src={surekli} alt="icon" />
                    <h5>SÜREKLİ GELİŞİM</h5>
                    <p className="lead">Sektörel tüm gelişmeleri yakından takip ederek; öğrenen, gelişen ve yenilenen bir kurumsal kültür ile çalışırız. Müşterilerimizden ve çalışanlarımızdan gelen geri bildirimleri önemser ve dikkate alarak gerekli aksiyonları hayata geçiririz.

</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" style={{ height:"100px",width:"auto"}} src={kalite} alt="icon" />
                    <h5>KALİTE YÖNETİMİ</h5>
                    <p className="lead">Üretim, pazarlama, satış ve yönetim süreçlerinin her bir kademesinde görev alan profesyonel kadrolar, operasyonel faaliyetlerin kesintisiz bir şekilde iyileştirilmesine yardımcı olur. Böylece Doğsan’da kalite prensipleri A’dan Z’ye ciddiyetler uygulanır.
</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" style={{ height:"100px",width:"auto"}} src={takim} alt="icon" />
                    <h5>TAKIM ÇALIŞMASI</h5>
                    <p className="lead">Yüksek deneyimli ve yetenekli her bir çalışanımızın bireysel becerisi, takım çalışmasına inanarak Doğsan’ın başarısını oluşturur. Farklı görüşlere saygı, çeşitliliğe duyulan inanç, dayanışma ruhu ve birbirine duyulan güven bizi birbirimize bağlayan en önemli kültürdür.</p>
                  </div>
                </div>
              </div>
              </div>
          </section>
        </div>
      </div>
    </div></div>
  )
}
