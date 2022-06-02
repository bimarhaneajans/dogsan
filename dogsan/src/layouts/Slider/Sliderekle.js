import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SliderDataService from "../../services/SliderService";
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
import axios from "axios";

const useDataApi = (initialUrl, initialData) => {

  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default function Form() {

  const initialTutorialState = {
    id: null,
    Baslik: "",
    Resimicerik: "",
    VideoBaslik: "",
    Veritipi: false,
    url: "",
    src: "",
    VideoBaslik: "",
    published: false
  };



  const [query, setQuery] = useState("");
  const [tutorial, setTutorial] = useState(initialTutorialState)
  const [submitted, setSubmitted] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const [Baslik, setBaslik] = React.useState("");
  const [Veritipi, setVeritipi] = React.useState("");
  const [Resimicerik, setResimicerik] = React.useState("");
  const [VideoBaslik, setVideoBaslik] = React.useState("");

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;
  const [selectedFile, setSelectedFile] = React.useState(null);



/*   const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };


  const saveTutorial = () => {
    var data = {
      id: tutorial.id,
      Baslik: tutorial.Baslik,
      Veritipi: tutorial.Veritipi,
      Resimicerik: tutorial.Resimicerik,
      src: tutorial.src,
      VideoBaslik: tutorial.VideoBaslik,
      url: tutorial.url,
      //Resim: tutorial.Resim,
    };

    console.log(data)

    SliderDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          Baslik: response.data.Baslik,
          Veritipi: response.data.Veritipi,
          Resimicerik: response.data.Resimicerik,
          VideoBaslik: response.data.VideoBaslik,
          url: response.data.url,
          src: response.data.src,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
 */
  const newTutorial = () => { 
    setSubmitted(false);
  };



  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    formData.append("Baslik", Baslik);
    formData.append("Veritipi", Veritipi);
    formData.append("Resimicerik", Resimicerik);
    formData.append("VideoBaslik", VideoBaslik);
    setSubmitted(true);
   // for(let [name, value] of formData) {
     
   //  alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
//}
  /*   formData.append("selectedFile", selectedFile); */

  /*
  
  , {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
  
  */


    try {
      const response = await axios({
        method: "post",
        url: "https://cors-anywhere.herokuapp.com/https://bavrim.madilink.net/video",
        data: formData,
        mode: 'no-cors',
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
          "Content-Type": "multipart/form-data"
        },
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (<DashboardLayout>
    <Sidenav
      color={sidenavColor}
      brand={brand}
      brandName=" DOĞSAN PANEL "
      routes={routes}
    />
    <div>
      <div style={{ marginLeft: "100px" }}>
        <Header />
      </div>
      <div style={{ width: "300px", marginLeft: "100px" }}>
      {submitted ? (
            <div>
              <h4>Başarılı! Yeni eklemek istermisin ?</h4>
              <button className="btn btn-success" onClick={newTutorial}>
                Ekle
              </button>
            </div>
          ) : (
        <form onSubmit={handleSubmit}>


          <div className="submit-form">

            <div className="form-group">
              <label htmlFor="Başlık">Başlık</label>
              <input
                type="text"
                className="form-control"
                id="Baslik"

                value={Baslik}
                
                onChange={e => setBaslik(e.target.value)}  
                name="Baslik"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Veritipi">Veri tipi</label>
              <input
                type="radio"
                className="form-control"
                id="Veritipi"

                value={Veritipi}
               
                onChange={e => setVeritipi(e.target.value)}  
                name="Veritipi"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Resimicerik">Resim  icerik</label>
              <input
                type="text"
                className="form-control"
                id="Resimicerik"

                value={Resimicerik}
                 onChange={e => setResimicerik(e.target.value)}  
                name="Resimicerik"
              />
            </div>
            <div className="form-group">
              <label htmlFor="VideoBaslik">Video Başlık</label>
              <input
                type="text"
                className="form-control"
                id="VideoBaslik"

                value={VideoBaslik}
                onChange={e => setVideoBaslik(e.target.value)}  
            
                name="VideoBaslik"
              />
            </div> 



            <input type="file" onChange={handleFileSelect} />
            <input type="submit" value="Kaydet" />

          </div>  
         
        </form>
            )}
      </div>
    
    </div>
  </DashboardLayout>
  );
}

/* 


const BayiEkle = () => {
 
   
 

  

  return (
    
      

     
      
      
      <form >
       
      
     
         
      
      
            <div>
             
              </div>
           
             
        
        

             
              

           
          
            </div>
        


        </div>
        </form>

        
      </div>
     

   
  );
};

export default BayiEkle; */