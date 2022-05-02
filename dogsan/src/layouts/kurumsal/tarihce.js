import React from 'react'
import HeaderKurumsal from './header/HeaderKurumsal';
import tarih from "./1970-tr.svg";
export default function tarihce() {
  return (
    <div><div >
      <HeaderKurumsal />
      <div style={{ paddingTop: "10px" }} class="main-wrapper">
        <div id="home" >
          <section id="about" className="about" style={{ marginTop: "100px" }}>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>1950</h5>
                    <p className="lead">Trabzon Uzun sokaktaki Şifa Eczanesi, M. Kamil Saruhan tarafından işletilmektedir. Oğlu Salim Saruhan, baba mesleğini sürdürmek hedefiyle Tıp Fakültesi'ni yarım bırakarak Eczacılık Fakültesi'nde eğitim görmeye başlar ve mezun olur olmaz eczanenin işletmesini üstlenir.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>1959</h5>
                    <p className="lead">Salim Saruhan Trabzon'da Doğu Ecza Deposu'nu kurarak Karadeniz Bölgesi'nde ilaç dağıtımına başlanır.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>1965</h5>
                    <p className="lead">Saba İlaç'ın kurulması ile insan sağlığı alanında verilen hizmetler tam bir aile geleneğine dönüşür.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>1969</h5>
                    <p className="lead">Saruhan ailesinin yenilikçi ruhu bu kez ülkenin sağlık sektöründe bir ilki gerçekleştirmeyi planlarını yapmaktadır. Doğsan'ın oluşumuna giden en önemli adımlar bu yıl atılır. Bir yıl içinde yatırımlar ve gereken hazırlıklar tamamlanır.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>2004</h5>
                    <p className="lead">Kalite sertifikalarına ISO 9001:2000 kalite yönetim sistemi belgesi eklenir. İpek ve Daylon Class 2b ürünlerine 93/42/EEC uygunluk belgesi alınır.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>2005</h5>
                    <p className="lead">Propilen, Trofilen ve Politer Class 3 ürünlerine 93/42/EEC uygunluk belgesi alınır.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                    <img className="pull-center icon" src={tarih} alt="icon" />
                    <h5>2006</h5>
                    <p className="lead">Sentetik emilebilir sütürler; Pegesorb, Pegesorb rapid, Pegelak, Pegelak rapid, Tekmon ve Pedesente ürünlerin üretimine başlanır ve 93/42/EEC uygunluk belgeri alınır.</p>
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
