
import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import UrunDataService from "../../services/UrunService";
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
    Adi:"",
    Renk: "",
    icerik: "", 
    published:false
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

/*   const getTutorial = id => {
    UrunDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);
 */
  const getTutorial = id => {
    UrunDataService.get(id)
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
        Adi: currentTutorial.Adi,
        Renk: currentTutorial.Renk,
        icerik: currentTutorial.icerik, 
        published: status
    };

    UrunDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
        setMessage("Ba??ar??l?? bir ??ekilde g??ncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    UrunDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Ba??ar?? ile G??ncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    UrunDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/urunliste");
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
            brandName=" DO??SAN PANEL "
            routes={routes} 
          />
    <div style={{ marginLeft: "100px" }}> 
      <Header />
    </div>

    <div style={{ width: "300px", marginLeft: "100px" }}>
      {currentTutorial ? (
        <div className="edit-form">
      
          <form>
            <div className="form-group">
            <label htmlFor="title">Adi </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="Adi"
                  name="Adi"
                  value={currentTutorial.Adi}
                  onChange={handleInputChange}  
                /> */}
 <RichTextEditor name="Adi" id="Adi" type="text" style={{ width: "600px" }} value={currentTutorial.Adi} onChange={(Adi) => handleInputChange({ target: { value: Adi, name: 'Adi' } })} />

              </div>
              <div className="form-group">
                <label htmlFor="description">Renk </label>
                {/* <input
                  type="text"
                  className="form-control"
                  id="Renk"
                  name="Renk"
                  value={currentTutorial.Renk}
                 onChange={handleInputChange}  
                /> */}
<RichTextEditor name="Renk" id="Renk" type="text" style={{ width: "600px" }} value={currentTutorial.Renk} onChange={(Renk) => handleInputChange({ target: { value: Renk, name: 'Renk' } })} />

              </div>
               <div className="form-group">
                <label htmlFor="description">icerik </label>
              {/*   <input
                  type="text"
                  className="form-control"
                  id="icerik"
                  name="icerik"
                  value={currentTutorial.icerik}
                 onChange={handleInputChange}  
                /> */}
<RichTextEditor name="icerik" id="icerik" type="text" style={{ width: "600px" }} value={currentTutorial.icerik} onChange={(icerik) => handleInputChange({ target: { value: icerik, name: 'icerik' } })} />

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