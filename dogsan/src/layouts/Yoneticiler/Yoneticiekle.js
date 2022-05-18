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



const BayiEkle = () => {
  const initialTutorialState = {
    id: null,
    yoneticiadi: "",
    yoneticisoyadi: "",
    kariyer: "",
    pozizyon: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    googleplus: "",
    published: false
  };


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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      yoneticiadi: tutorial.yoneticiadi,
      yoneticisoyadi: tutorial.yoneticisoyadi,
      kariyer: tutorial.kariyer,
      pozizyon: tutorial.pozizyon,
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
                <label htmlFor="yoneticiadi">yoneticiadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="yoneticiadi"
                  required
                  value={tutorial.yoneticiadi}
                  onChange={handleInputChange}
                  name="yoneticiadi"
                />

              </div>



              <div className="form-group">
                <label htmlFor="yoneticisoyadi">yoneticisoyadi</label>
                <input
                  type="text"
                  className="form-control"
                  id="yoneticisoyadi"
                  required
                  value={tutorial.yoneticisoyadi}
                  onChange={handleInputChange}
                  name="yoneticisoyadi"
                />
              </div>
              <div className="form-group">
                <label htmlFor="kariyer">kariyer</label>
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
                <label htmlFor="pozizyon">pozizyon</label>
                <input
                  type="text"
                  className="form-control"
                  id="pozizyon"
                  required
                  value={tutorial.pozizyon}
                  onChange={handleInputChange}
                  name="pozizyon"
                />
              </div>

              <div className="form-group">
                <label htmlFor="twitter">twitter</label>
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
                <label htmlFor="facebook">facebook</label>
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
                <label htmlFor="linkedin">linkedin</label>
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
                <label htmlFor="googleplus">googleplus</label>
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

export default BayiEkle;