import React from 'react';
import tarih from "./1970-tr.svg";
import top from "./top_image_58f83656bf.jpg";
import Header from '../header/header';
import HeaderKurumsal from './header/HeaderKurumsal';
import { Player, ControlBar } from 'video-react';
import ReactPlayer from 'react-player'

export default function hakkimizda() {

  return (
    <div >
      <HeaderKurumsal />
      <div style={{ paddingTop: "10px" }} class="main-wrapper">
        <div id="home" >
          <section id="about" className="about" style={{ marginTop: "150px" }}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img id="pull-center icon" style={{width:"900px"}}src={top} alt="icon" />
                    <br />
                    <br />

                  {/*   margin-left: 150px */}

                    <div className="reactPly" >
                    <ReactPlayer  url='https://www.youtube.com/watch?v=WzP6rGRNzWw' />
                    </div>
                    <h5>1970'den Beri</h5>
                    <p className="lead">Türkiye, Ortadoğu ve Balkanlar’daki ilk sütür üreticisi olan Doğsan, 1970 yılında kurulmuştur ve sütür üretiminde köklü bir geçmişe sahiptir.

                      Dünya markası ürünler karşısında sahip olduğu rekabet gücünü geniş üretim, yönetim ve satış kadrosu, 50’ye yakın distribütörü ve 50 yılı aşkın deneyiminden alan Doğsan, Türkiye’de böylesine hassas, böylesine yaşamsal bir sektörde bütünüyle ulusal sermaye ve işgücüyle başarıyla hizmet vermekten onur duymaktadır.

                      Doğsan kalitesiyle Türkiye hastanelerinde saygı duyulan bir markaya sahiptir ve kalitesini global pazarlara da taşımıştır. Şu anda Avrupa, Asya ve Ortadoğu’da 40’i aşkın ülkeye ihracat yapmaktadır.

                      Doğsan; emilebilir ve emilmeyen sütürleri ile geniş kapsamlı ürün yelpazesine sahiptir. USP 12/0’dan USP 5 aralığındaki sütürler ile kardiyovasküler cerrahi, mikrocerrahi ve göz cerrahisini de içeren tüm cerrahi branşların ihtiyaçlarını karşılamaktadır.

                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <h5>DOGSAN 40. YIL BELGESELİ</h5>
                    <p className="lead">Firmanın kurucusu Eczacı S. Salim Saruhan 1950’li yılların başında Trabzon’da Şifa Eczanesi’ni işletirken, 1959 yılında Doğu Ecza Deposu’nu kurar ve Karadeniz Bölgesi’nin ilk ilaç dağıtım deposunun bayrağı dalgalanmaya başlar. Şifa dağıtmanın yanında artık üretime geçme kararı alan Salim Saruhan Bölgenin Doktor ve Eczacıları ile bir araya gelerek; 1965’de Saba ilaç ile ilk ilaç üretimine başlar. 1970 yılında Türkiye’de cerrahi alandaki en önemli eksiklik Trabzon’da kurulan katgüt üretimi ile artık hayalden gerçeğe dönüşür. Kısıtlı imkanlar ile, o zamanın en iyi teknolojisini kullanarak, herkesin hayretle baktığı ama daha sonra hayranlık duyduğu DOĞSAN Ameliyat İpliği fabrikası üretime başlar. Doğsan bölgesine iş imkanı sunarken böylesine önemli, böylesine stratejik, hayati bir ürün üstünde Türk markası ile üretiliyor ve kolayca bulunabilir hale geliyor, ülke ekonomisine de inanılmaz bir katkı sağlanıyor. O zamana kadar yalnızca ithal edilen cerrahi iplikler tekel olmaktan çıkıyor.

                      Bugün Türkiye’nin hemen hemen her hastanesinde güvenle kullanılan Doğsan Ameliyat İplikleri Dünya markası olma yolunda da azimle ilerliyor. Avrupa’da Almanya, İsviçre, Avusturya, İtalya’ya, Ortadoğu’da Suudi Arabistan, Irak, Lübnan, Yemen vb.’ye, tüm Türki Cumhuriyetlere ve Balkanlara ihracat gerçekleştiriyor.

                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
