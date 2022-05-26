import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import YoneticilerDataService from "../../services/YoneticilerService";
import KariyerDataService from "../../services/KariyerService";

import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import Select from 'react-select';

import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';

const YoneticiEkle = () => {
  const initialTutorialState = {
    id: null,
    yoneticiadi: "",
    yoneticisoyadi: "",
    kisaozgecmis:"",
    kariyer: "",
    pozizyon: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    googleplus: "",
    published: false
  };

  const initialValue = 'Alana verileri doldurun';
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [kariyer, setKariyer] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;

  /*   const taner = [{ value: '', label: '' }, 
    ];
   */
  useEffect(() => {
    retrieveKariyer();
  }, []);
  const [yoneticiadi, Changeyoneticiadi] = useState(initialValue)
  const [yoneticisoyadi, Changeyoneticisoyadi] = useState(initialValue)
  const [kisaozgecmis, Changekisaozgecmis] = useState(initialValue)
  const [pozizyon, Changepozizyon] = useState(initialValue)
  const [Resim, ChangeResim] = useState(initialValue)


  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      yoneticiadi: JSON.stringify(yoneticiadi),
      yoneticisoyadi: JSON.stringify(yoneticisoyadi),
      kariyer: tutorial.kariyer,
      pozizyon:JSON.stringify(pozizyon),
      kisaozgecmis:JSON.stringify(kisaozgecmis),
      twitter: tutorial.twitter,
      facebook: tutorial.facebook,
      linkedin: tutorial.linkedin,
      googleplus: tutorial.googleplus,
      Resim: tutorial.Resim,
    };

    YoneticilerDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          yoneticiadi: response.data.yoneticiadi,
          yoneticisoyadi: response.data.yoneticisoyadi,
          kariyer: response.data.kariyer,
          pozizyon: response.data.pozizyon,
          twitter: response.data.twitter,
          facebook: response.data.facebook,
          linkedin: response.data.linkedin,
          googleplus: response.data.googleplus,
          Resim: response.data.Resim,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  /*   const retrieveKariyer = () => {
       const taner = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
    
      console.log(taner)
     
      KariyerDataService.getAll()  
        .then(response => {
          let kariyer=[]; 
          let kariyerlist=[]; 
          const options=[]; 
            kariyer = response.data;
          //  kariyer.map((kariyer,index) =>
             
         // options[index] = [ { "value": kariyer.kariyeradi.toString(), "label": kariyer.kariyeradi.toString() },  ],
          //kariyerlist.concat(options),
         // setKariyer(options),
        console.log(kariyer)
        // );    
     
          // 
        })
        .catch(e => {
          console.log(e);
        });
    };
  
   */


  const retrieveKariyer = () => {
    let options = [];
    KariyerDataService.getAll()
      .then(response => {
        const kariyer = response.data;

        /*   kariyer.map((kariyers) =>
              options = [{ "value":kariyers.kariyeradi, "label": kariyers.kariyeradi },  ],
              setKariyer([...options],options),
              console.log(options)
              );  */

        setKariyer(kariyer);
        console.log(kariyer)

      })
      .catch(e => {
        console.log(e);
      });
  };


  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <DashboardLayout>
      <Sidenav
        color={sidenavColor}
        brand={brand}
        brandName=" DOĞSAN PANEL "
        routes={routes}
      />
      <div style={{ marginLeft: "100px" }}>
        <Header />
      </div>

      <div style={{ width: "300px", marginLeft: "100px" }}>
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>Başarılı! Yeni eklemek istermisin ?</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Ekle
              </button>
            </div>
          ) : (
            <div>

              <div className="form-group">
                <label htmlFor="yoneticiadi">Yönetici Adı</label>
                <RichTextEditor name="yoneticiadi" id="yoneticiadi" type="text" style={{ width: "600px" }} value={yoneticiadi} onChange={Changeyoneticiadi} />

              </div>



              <div className="form-group">
                <label htmlFor="yoneticisoyadi">Yönetici Soyadı</label>
                <RichTextEditor name="yoneticisoyadi" id="yoneticisoyadi" type="text" style={{ width: "600px" }} value={yoneticisoyadi} onChange={Changeyoneticisoyadi} />
              </div>
              <div className="form-group">
                <label htmlFor="kisaozgecmis">Kısa Özgeçmiş</label>
                <RichTextEditor name="kisaozgecmis" id="kisaozgecmis" type="text" style={{ width: "600px" }} value={kisaozgecmis} onChange={Changekisaozgecmis} />
              </div>
              <div className="form-group">
                <label htmlFor="kariyer">Kariyer</label>
                {/*  <Select
                 id="kariyer"
                  defaultValue={selectedOption} //default
                  onChange={setSelectedOption} //  onChange={handleInputChange}

                  options={kariyer}
                /> */}
                <>
                  <select
                    type="text"
                    id="kariyer"
                    name="kariyer"
                    value={tutorial.kariyer}
                    onChange={handleInputChange}
                  >
                    {kariyer.map(options => <option key={options.kariyeradi} value={options.kariyeradi}>{options.kariyeradi}</option>)

                    }

                  </select>
                </>

              </div>
              <div className="form-group">
                <label htmlFor="pozizyon">Pozisyon</label>
                <RichTextEditor name="pozizyon" id="pozizyon" type="text" style={{ width: "600px" }} value={pozizyon} onChange={Changepozizyon} />
              </div>

              <div className="form-group">
                <label htmlFor="twitter">Twitter</label>
                <input
                  type="text"
                  className="form-control"
                  id="twitter"
                  required
                  value={tutorial.twitter}
                  onChange={handleInputChange}
                  name="twitter"
                />
              </div>
              <div className="form-group">
                <label htmlFor="facebook">Facebook</label>
                <input
                  type="text"
                  className="form-control"
                  id="facebook"
                  required
                  value={tutorial.facebook}
                  onChange={handleInputChange}
                  name="facebook"
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">Linkedin</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedin"
                  required
                  value={tutorial.linkedin}
                  onChange={handleInputChange}
                  name="linkedin"
                />
              </div>
              <div className="form-group">
                <label htmlFor="googleplus">Google Plus</label>
                <input
                  type="text"
                  className="form-control"
                  id="googleplus"
                  required
                  value={tutorial.googleplus}
                  onChange={handleInputChange}
                  name="googleplus"
                />
              </div>

              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setTutorial({ ...tutorial, Resim: base64 })}
              />

              <button onClick={saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default YoneticiEkle;