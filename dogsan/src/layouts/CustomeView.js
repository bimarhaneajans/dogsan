import React, { useState, useEffect, useMemo, useRef } from "react";
import SlaytDataService from "../services/SliderService"; 
const  CustomeView= props => {
    const [slaty, setSlayt] = useState([]);

    useEffect(() => {

        retrieveSlayt();
      }, []);
      
    
      const retrieveSlayt = () => {
        SlaytDataService.getAll()
          .then(response => {
            const persons = response.data;
    
            //setSlayt(persons)
            //);
             console.log(persons)
    
    
    
          })
          .catch(e => {
            console.log(e);
          });
      };

    const { persons } = props;
  return (
    <div >
    {persons.src ? (
      <video width="320" height="240" controls>
          <source src={this.persons.src} type={this.persons.type}/> 
      </video>
    ) : (
      <img  src={this.persons.src} />
    )}
  </div>
  )
}

export default CustomeView
