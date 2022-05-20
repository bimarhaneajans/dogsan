
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MesajlarService from "../../services/MesajlarService";
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

import 'draft-js/dist/Draft.css';
import { RichTextEditor } from '@mantine/rte';

const MesajlarEkle = () => {
  const initialTutorialState = {
    id: null,
    Subject: "",
    email: "",
    Content: "", 
    published: false
  };

  const initialValue = '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';
  const [tutorial, setTutorial] = useState(initialTutorialState);
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

  const [Subject, ChangeSubject] = useState(initialValue)
  const [email, Changeemail] = useState(initialValue)
  const [Content, ChangeContent] = useState(initialValue)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      Subject: tutorial.Subject,
      email: tutorial.email,
      Content: tutorial.Content, 
    };

    MesajlarService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          Subject: JSON.stringify(Subject),
          email:JSON.stringify(email),
          Content: JSON.stringify(Content),
          Resim: JSON.stringify(Resim),
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
                <label htmlFor="Subject">Subject</label>
                <RichTextEditor name="Subject" id="Subject" type="text" style={{ width: "600px" }} value={Subject} onChange={ChangeSubject} />
              </div>

            {/*   <div style={{ width: "300 px" }}>
                <Editor
                  editorState={tutorial.boylam}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleInputChange}
                />
              </div> */}

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <RichTextEditor name="email" id="email" type="text" style={{ width: "600px" }} value={email} onChange={Changeemail} />
              </div>
              <div className="form-group">
                <label htmlFor="Content">Content</label>
                <RichTextEditor name="Content" id="Content" type="text" style={{ width: "600px" }} value={Content} onChange={ChangeContent} />
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

export default MesajlarEkle;