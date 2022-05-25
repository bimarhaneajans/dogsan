
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import KatalogDataService from "../../services/KatalogService";
import KatalogUploadService from "../../services/KatalogUploadService";
import KatalogYukleme from "./KatalogYukleme"
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
/* import Select from 'react-select'; */
const KatalogEkle = () => {
  const initialTutorialState = {
    id: null,
    katalogadi: "",
    Resim: "",
    published: false
  };


  /*
   
  
   UploadService.getFiles().then((response) => {
        this.setState({
          fileInfos: response.data,
        });
      });
  
  */



  const initialValue = 'Alana verileri doldurun';
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [fileInfos, setfileInfos] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;

  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const { size } = typography;

  const [katalogadi, Changekatalogadi] = useState(initialValue)
  const [katalogurl, setKatalogurl] = useState();
  const [selectedFiles, setselectedFiles] = useState();
  const [currentFile, setselectedcurrentFile] = useState();
  const [progress, setprogress] = useState();
  const [message, setmessage] = useState();


  const [Resim, ChangeResim] = useState(initialValue)

  useEffect(() => {

    retrieveKatalogUpload();
  }, []);


  /*UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  
  
  */ useEffect(() => {

    Katalogupload();
  }, []);


  const selectFile = event => {
    const { name, value } = event.target;
    setselectedFiles({ [name]: value });
  };



  function upload() {
    let currentFile = selectedFiles[0];


    setprogress(0)
    setselectedcurrentFile({ currentFile });

    KatalogUploadService.upload(currentFile, (event) => {
      setprogress({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        setmessage({
          message: response.data.message,
        });
        // return KatalogUploadService.getFiles();
      })
      .then((files) => {
        setfileInfos({
          fileInfos: files.data,
        });
      })
      .catch(() => {

        setselectedcurrentFile(undefined)
        setprogress(0);
        setmessage("Could not upload the file!")
      });

    this.setselectedFiles({
      selectedFiles: undefined,
    });
  }


  //const {selectedFiles,currentFile,progress,message, fileInfos} = this.state;




  const Katalogupload = () => {
    KatalogUploadService.upload().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  };

  const retrieveKatalogUpload = () => {
    KatalogUploadService.getFiles()
      .then(response => {
        setKatalogurl(response.data);
        //  console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      katalogadi: JSON.stringify(katalogadi),
      katalogurl: tutorial.katalogurl,
      Resim: tutorial.Resim,

    };

    KatalogDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          katalogadi: response.data.katalogadi,
          katalogurl: response.data.katalogurl,
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
                <label htmlFor="katalogadi">Katalog Adı</label>
                <RichTextEditor name="katalogadi" id="katalogadi" type="text" style={{ width: "600px" }} value={katalogadi} onChange={Changekatalogadi} />
              </div>

              {currentFile && (
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-info progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: progress + "%" }}
                  >
                    {progress}%
                  </div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="kariyer">Katalog Yükle</label>
                {/* <>
                  <select
                    type="text"
                    id="katalogurl"
                    name="katalogurl"
                    value={tutorial.katalogurl}
                    onChange={handleInputChange}
                  >
                    {katalogurl.map((file, index) => <option key={index} value={file.url}>{file.name}</option>)

                    }

                  </select>
                </> */}
                {/* <>
                  <select
                    type="text"
                    id="katalogurl"
                    name="katalogurl"
                    value={tutorial.katalogurl}
                    onChange={handleInputChange}
                  >
                    {katalogurl.map(options => <option key={options.katalogurl} value={options.katalogurl}>{options.katalogurl}</option>)

                    }

                  </select>
                </> */}
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

export default KatalogEkle;