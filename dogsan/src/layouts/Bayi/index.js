
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTutorial, deleteTutorial } from "../../redux/actions/bayi";
import BayiDataService from "../../services/BayiService";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";


// Overview page components
import Header from "layouts/profile/components/Header";


const Overview = (props) => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    telefon: "",
    enlem: "",
    boylam: "",

    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

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
 /*
  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]); */

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updateStatus = status => {
    const data = {
      id: currentTutorial.id,
      baslik: currentTutorial.baslik,
      adres: currentTutorial.adres,
      telefon: currentTutorial.telefon,
      enlem: currentTutorial.enlem,
      boylam: currentTutorial.boylam,
      published: status
    };

    dispatch(updateTutorial(currentTutorial.id, data))
      .then(response => {
        console.log(response);

        setCurrentTutorial({ ...currentTutorial, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateContent = () => {
    dispatch(updateTutorial(currentTutorial.id, currentTutorial))
      .then(response => {
        console.log(response);

        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };
  const removeTutorial = () => {
    dispatch(deleteTutorial(currentTutorial.id))
      .then(() => {
        props.history.push("/tutorials");
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
                  <strong>Durum :</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateStatus(false)}
              >
                Yayında  
              </button> 
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => updateStatus(true)}
              >
                Yayında Değil
              </button>
              
            )}

            <button className="badge badge-danger mr-2" onClick={removeTutorial}>
              Sil
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={updateContent}
            >
              Güncelle
            </button>
            <p>{message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Overview;
