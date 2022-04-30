import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import BayiDataService from "../../services/BayiService";


// Overview page components
import Header from "layouts/profile/components/Header";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    baslik: "",
    adres: "",
    telefon: "",
    enlem: "",
    boylam: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      baslik: tutorial.baslik,
      adres: tutorial.adres
    };

    BayiDataService.create(data)
      .then(response => {
        setTutorial({
         // id: response.data.id,
          baslik: response.data.baslik,
          adres: response.data.adres,
       /*    telefon: response.data.telefon,
          enlem: response.data.enlem,
          boylam: response.data.boylam, */
          published: true
        });
        setSubmitted(true);
        console.log(response.data);
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

      <Header />
      <br />
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="baslik"
                required
                value={tutorial.baslik}
                onChange={handleInputChange}
                name="baslik"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="adres"
                required
                value={tutorial.adres}
                onChange={handleInputChange}
                name="adres"
              />
            </div>

            <button onClick={saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AddTutorial;