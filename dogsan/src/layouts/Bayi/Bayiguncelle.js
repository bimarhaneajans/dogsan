import React, {useState,useEffect,useMemo, useRef  } from "react";
import { useParams, useNavigate } from 'react-router-dom';

 
import { useTable } from "react-table";

 import { updateTutorial, deleteTutorial } from "../../redux/actions/bayi";
import BayiDataService from "../../services/BayiService";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";


// Overview page components
import Header from "layouts/profile/components/Header";
import Bayiekle from "layouts/Bayi/Bayiekle"

const Overview = props => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    baslik:"",
    adres: "",
    telefon: "",
    enlem: "",
    boylam: "",
    published:false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

/*   const getTutorial = id => {
    BayiDataService.get(id)
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
    BayiDataService.get(id)
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
        adres: currentTutorial.adres,
        telefon: currentTutorial.telefon,
        enlem: currentTutorial.enlem,
        boylam: currentTutorial.boylam,
        published: status
    };

    BayiDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    BayiDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    BayiDataService.remove(currentTutorial.id)
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

    <Header />
    <br />
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
            <label htmlFor="title">Başlık </label>
                <input
                  type="text"
                  className="form-control"
                  id="baslik"
                  name="baslik"
                  value={currentTutorial.baslik}
                  onChange={handleInputChange}  
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Adres </label>
                <input
                  type="text"
                  className="form-control"
                  id="adres"
                  name="adres"
                  value={currentTutorial.adres}
                 onChange={handleInputChange}  
                />
              </div>
               <div className="form-group">
                <label htmlFor="description">Telefon </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefon"
                  name="telefon"
                  value={currentTutorial.telefon}
                 onChange={handleInputChange}  
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Enlem </label>
                <input
                  type="text"
                  className="form-control"
                  id="enlem"
                  name="enlem"
                  value={currentTutorial.enlem}
               onChange={handleInputChange}  
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Boylam </label>
                <input
                  type="text"
                  className="form-control"
                  id="boylam"
                  name="boylam"
                  value={currentTutorial.boylam}
               onChange={handleInputChange} 
                />
            </div>

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
          <p>Please click on a Bayi...</p>
        </div>
      )}
    </div>
  

</DashboardLayout>
);
}

export default Overview;