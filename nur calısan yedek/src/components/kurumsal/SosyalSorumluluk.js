import React from 'react'
import HeaderKurumsal from './header/HeaderKurumsal';
import sosyal from "./sosyal.jpg";
export default function SosyalSorumluluk() {
  return (
    <div>
      <HeaderKurumsal />
      <div style={{ paddingTop: "10px" }} class="main-wrapper">
        <div id="home" >
          <section id="about" className="about" style={{ marginTop: "150px" }}>
            <div className="container">
              <div className="row">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="mission-stat text-center col-md-8 col-md-offset-2 bottom-space-50">
                      <img className="pull-center" style={{ height: "400px", width: "auto" }} src={sosyal} alt="icon" />
                      <h5>TÜRK EĞİTİM VAKFI</h5>
                      <p className="lead">Öğrencilere burs vererek destek oluyoruz

                      </p>
                    </div>
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
