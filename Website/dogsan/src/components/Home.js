import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const data =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(data);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
       {/*  <h3>{content}</h3> */}
      </header>
      <img src="healthcare-medical-concept-med.png"/>
   <div />
   <div id="emilebilir" class="emilebilir">

    <div id="EMLEBLR_STRLER">
     <span>EMİLEBİLİR<br />SÜTÜRLER</span>
    </div>
   </div>
   <div id="milmeyen" class="milmeyen">

    <div id="EMLMEYEN_STRLER">
     <span>EMİLMEYEN<br />SÜTÜRLER</span>
    </div>
   </div>
   <div id="Component_7__1" class="Component_7___1">

    <div id="EMLEBLR_HEMOSTAT">
     <span>EMİLEBİLİR<br />HEMOSTAT</span>
    </div>
   </div>
   <div id="Component_8__1" class="Component_8___1">

    <div id="DENTAL_STRLER">
     <span>DENTAL<br />SÜTÜRLER</span>
    </div>
   </div>
   <div id="Component_9__1" class="Component_9___1">

    <div id="VETERNERLK">
     <span>VETERİNERLİK</span>
    </div>
   </div>
    </div>
  );
};

export default Home;