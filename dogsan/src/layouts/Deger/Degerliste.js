import React, { useState, useEffect, useMemo, useRef } from "react";


import { useTable } from "react-table";

import { updateTutorial, deleteTutorial } from "../../redux/actions/bayi";
import BayiDataService from "../../services/BayiService";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Link } from "react-router-dom";


// Overview page components
import Header from "layouts/profile/components/Header";
import Bayiekle from "layouts/Bayi/Bayiekle"
const Overview = (props) => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    BayiDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    BayiDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    BayiDataService.findByTitle(searchTitle)
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <DashboardLayout>
      <div style={{ marginLeft: "100px" }}>
        <Header />
      </div>

      <div style={{ width: "300px", marginLeft: "275px",marginTop:"20px" }}>
        <br />
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByTitle}
                >
                  Ara
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">


            <ul className="list-group">
              {tutorials &&
                tutorials.map((tutorial, index) => (
                  <li
                    className={
                      "list-group-item " + (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveTutorial(tutorial, index)}
                    key={index}
                  >
                    {tutorial.baslik}
                  </li>
                ))}
            </ul>

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllTutorials}
            >
              Tümünü Sil
            </button>
          </div>
          <div className="col-md-6">
            {currentTutorial ? (
              <div>
                <strong>Başlık:</strong>
                <div>
                  <label>

                  </label>{" "}
                  {currentTutorial.baslik}
                </div>
                <div>
                  <label>
                    <strong>Adres:</strong>
                  </label>{" "}
                  {currentTutorial.adres}
                </div>
                <div>
                  <label>
                    <strong>Enlem:</strong>
                  </label>{" "}
                  {currentTutorial.enlem}
                </div>
                <div>
                  <label>
                    <strong>Telefon:</strong>
                  </label>{" "}
                  {currentTutorial.telefon}
                </div>
                <div>
                  <label>
                    <strong>Boylam:</strong>
                  </label>{" "}
                  {currentTutorial.boylam}
                </div>
                <div>
                  <label>
                    <strong>Durum:</strong>
                  </label>{" "}
                  {currentTutorial.published ? "Published" : "Pending"}
                </div>

                <Link
                  to={"/bayiguncelle/" + currentTutorial._id}
                  className="m-6 btn btn-lm btn-warning"
                >
                  Düzenle
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Bir Bayi Seçin...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;