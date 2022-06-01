import React, {useState,useEffect,useMemo, useRef  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import SliderDataService from "../../services/SliderService";
import { useSoftUIController, setMiniSidenav, setOpenConfigurator } from "context";
import Header from "layouts/profile/components/Header";
import typography from "assets/theme/base/typography";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';

const Overview = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    ismi: "",
    slidetipi: "",
    siralama: "", 
     published:false
  };
  const [currentTutorial, setCurrentTutorial] = useState();
  const [message, setMessage] = useState("");
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;

/*   const getTutorial = id => {
    SliderDataService.get(id)
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
    SliderDataService.get(id)
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
        ismi: currentTutorial.ismi,
        slidetipi: currentTutorial.slidetipi,
        siralama: currentTutorial.siralama, 
        Resim: currentTutorial.Resim,
        published: status
    };

    SliderDataService.update(currentTutorial.id, data)
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
    SliderDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("Başarı ile Güncellendi");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    SliderDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        navigate("/Bayi");
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
    <div>
      {currentTutorial ? (
        <div className="edit-form">
      
          <form>
            <div className="form-group">
                 <label htmlFor="ismi">ismi</label>
                <input
                  type="text"
                  className="form-control"
                  id="ismi"
                  required
                  value={currentTutorial.ismi}
                  onChange={handleInputChange}
                  name="ismi"
                />
              </div>

        

              <div className="form-group">
                <label htmlFor="slidetipi">slide tipi</label>
                <input
                  type="text"
                  className="form-control"
                  id="slidetipi"
                  required
                  value={currentTutorial.slidetipi}
                  onChange={handleInputChange}
                  name="slidetipi"
                />
              </div>
              <div className="form-group">
                <label htmlFor="siralama">siralama</label>
                <input
                  type="text"
                  className="form-control"
                  id="siralama"
                  required
                  value={currentTutorial.siralama}
                  onChange={handleInputChange}
                  name="siralama"
                />
              </div>

              {/* <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setCurrentTutorial({ ...currentTutorial, Resim: base64 })}
              />  */} 

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
    </div>
  

</DashboardLayout>
);
}

export default Overview;