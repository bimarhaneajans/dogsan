
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import EtkinlikDataService from "../../services/EtkinlikService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';
const Overview = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    baslik: "",
    icerik: "",
    konumlinki: "",
    konum: "",
    baslangicTarihi: "",
    bitisTarihi: "",
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState();
  const [message, setMessage] = useState("");
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  
   const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
   const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;
 
  const getTutorial = id => {
    EtkinlikDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    var data = {
        id: currentTutorial.id,
        baslik: currentTutorial.baslik,
        icerik: currentTutorial.icerik,
        konumlinki: currentTutorial.konumlinki,
        konum: currentTutorial.konum,
        baslangicTarihi: currentTutorial.baslangicTarihi,
        bitisTarihi: currentTutorial.bitisTarihi,
        Resim: currentTutorial.data.Resim,
        published: status
    };

    EtkinlikDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
        setMessage("Başarılı bir şekilde güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    EtkinlikDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    EtkinlikDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/EtkinlikListe");
      })
      .catch(e => {
        console.log(e);
      });
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
      {currentTutorial ? (
         <div className="edit-form">
         <div className="card">
                   <br />
                   <div className="card-image waves-effect waves-block waves-light">
                     <img className="activator" style={{ width: '100%', height: 150 }} src={currentTutorial.Resim} />
                   </div>
                   <br />
                 </div>
      
          <form>
            <div className="form-group">
            <label htmlFor="title">Başlık </label>
             {/*    <input
                  type="text"
                  className="form-control"
                  id="baslik"
                  name="baslik"
                  value={currentTutorial.baslik}
                  onChange={handleInputChange}  
                /> */}
     <RichTextEditor name="baslik" id="baslik" type="text" style={{ width: "600px" }} value={currentTutorial.baslik} onChange={(baslik) => handleInputChange({ target: { value: baslik, name: 'baslik' } })} />

              </div>
              <div className="form-group">
                <label htmlFor="icerik">icerik </label>
             {/*    <input
                  type="text"
                  className="form-control"
                  id="icerik"
                  name="icerik"
                  value={currentTutorial.icerik}
                 onChange={handleInputChange}  
                /> */}
  <RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={currentTutorial.baslik} onChange={(icerik) => handleInputChange({ target: { value: icerik, name: 'icerik' } })} />

              </div>
               <div className="form-group">
                <label htmlFor="konumlinki">konumlinki </label>
               {/*  <input
                  type="text"
                  className="form-control"
                  id="konumlinki"
                  name="konumlinki"
                  value={currentTutorial.konumlinki}
                 onChange={handleInputChange}  
                /> */}
  <RichTextEditor name="konumlinki" id="konumlinki" type="text" style={{ width: "600px" }} value={currentTutorial.konumlinki} onChange={(konumlinki) => handleInputChange({ target: { value: konumlinki, name: 'konumlinki' } })} />

              </div>
              <div className="form-group">
                <label htmlFor="konum">konum </label>
               {/*  <input
                  type="text"
                  className="form-control"
                  id="konum"
                  name="konum"
                  value={currentTutorial.konum}
               onChange={handleInputChange}  
                /> */}
 <RichTextEditor name="konum" id="konum" type="text" style={{ width: "600px" }} value={currentTutorial.konum} onChange={(konum) => handleInputChange({ target: { value: konum, name: 'konum' } })} />

              </div>
              <div className="form-group">
                <label htmlFor="baslangicTarihi">baslangicTarihi </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="baslangicTarihi"
                  name="baslangicTarihi"
                  value={currentTutorial.baslangicTarihi}
               onChange={handleInputChange} 
                /> */}
   <RichTextEditor name="baslangicTarihi" id="baslangicTarihi" type="text" style={{ width: "600px" }} value={currentTutorial.baslangicTarihi} onChange={(baslangicTarihi) => handleInputChange({ target: { value: baslangicTarihi, name: 'baslangicTarihi' } })} />

            </div>
            <div className="form-group">
                <label htmlFor="bitisTarihi">bitisTarihi </label>
               {/*  <input
                  type="text"
                  className="form-control"
                  id="bitisTarihi"
                  name="bitisTarihi"
                  value={currentTutorial.bitisTarihi}
               onChange={handleInputChange} 
                /> */}
 <RichTextEditor name="bitisTarihi" id="bitisTarihi" type="text" style={{ width: "600px" }} value={currentTutorial.bitisTarihi} onChange={(bitisTarihi) => handleInputChange({ target: { value: bitisTarihi, name: 'bitisTarihi' } })} />

            </div>
             
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setCurrentTutorial({ ...currentTutorial, Resim: base64 })}
              />  

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
        
        </div>
      )}
    </div>
  

</DashboardLayout>
);
}

export default Overview;