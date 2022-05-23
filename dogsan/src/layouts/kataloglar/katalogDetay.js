
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Routes, Route, Navigate, useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import KatalagDataService from "../../services/KatalogService";

export default function KatalogDetay() {
  let { id } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [katalog, setKatalog] = useState([]);


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  useEffect(() => {

    retrieveKatalog();
}, []);



const retrieveKatalog = () => {
    KatalagDataService.get(id)
        .then(response => {
            setKatalog(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
};

  return (
    <div>
      <Document file={katalog.url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
 