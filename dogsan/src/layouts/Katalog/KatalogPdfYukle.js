/* 
import React, { useState, useEffect, useMemo, useRef, Component } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Header from "layouts/profile/components/Header";
import Sidenav from "examples/Sidenav";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import brand from "assets/images/logo-ct.png";
import FileBase64 from 'react-file-base64';
import UploadService from "../../services/KatalogUploadService";

export default class UploadImages extends Component {
    constructor(props) {
        super(props);
        this.selectFile = this.selectFile.bind(this);
        this.upload = this.upload.bind(this);

        this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",

            fileInfos: [],
        };
    }

    componentDidMount() {
        UploadService.getFiles().then((response) => {
            this.setState({
                fileInfos: response.data,
            });
        });
    }

    selectFile(event) {
        this.setState({
            selectedFiles: event.target.files,
        });
    }

    upload() {
        let currentFile = this.state.selectedFiles[0];

        this.setState({
            progress: 0,
            currentFile: currentFile,
        });

        UploadService.upload(currentFile, (event) => {
            this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
            });
        })
            .then((response) => {
                this.setState({
                    message: response.data.message,
                });
                return UploadService.getFiles();
            })
            .then((files) => {
                this.setState({
                    fileInfos: files.data,
                });
            })
            .catch(() => {
                this.setState({
                    progress: 0,
                    message: "Could not upload the file!",
                    currentFile: undefined,
                });
            });

        this.setState({
            selectedFiles: undefined,
        });
    }

    render() {
        const {
            selectedFiles,
            currentFile,
            progress,
            message,
            fileInfos,
        } = this.state;

        return (
            <DashboardLayout>
                <Sidenav
                    // color={sidenavColor}
                    brand={brand}
                    brandName=" DOĞSAN PANEL "
                    routes={routes}
                />
                <div style={{ marginLeft: "100px" }}>
                    <Header />
                </div>

                <div style={{ width: "300px", marginLeft: "100px" }}>
                    <br />
                    <div></div>
                    <div>
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

                        <label className="btn btn-default">
                            <input type="file" onChange={this.selectFile} />
                        </label>

                        <button
                            className="btn btn-success"
                            disabled={!selectedFiles}
                            onClick={this.upload}
                        >
                            Upload
                        </button>

                        <div className="alert alert-light" role="alert">
                            {message}
                        </div>

                        <div className="card">
                            <div className="card-header">List of Files</div>
                            <ul className="list-group list-group-flush">
                                {fileInfos &&
                                    fileInfos.map((file, index) => (
                                        <li className="list-group-item" key={index}>
                                            <a href={file.url}>{file.name}</a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
        );
    }
}

 */