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
      title: tutorial.title,
      description: tutorial.description
    };

    BayiDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,

          baslik: response.data.baslik,
          adres: response.data.adres,
          telefon: response.data.telefon,
          enlem: response.data.enlem,
          boylam: response.data.boylam,
          published: response.data.published
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
    <div style={{ marginLeft: "100px" }}> 
      <Header />
    </div>

    <div style={{ width: "300px", marginLeft: "100px" }}>
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
                id="title"
                required
                value={tutorial.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>

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

export default AddTutorial;