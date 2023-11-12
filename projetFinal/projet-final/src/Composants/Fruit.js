import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Fruit.css';

function Fruit(props) {

    const [photofruit, setPhotofruit] = useState([]);
    let idLien = "/zoomFruit/" + props.id;

    useEffect(() => {
      setPhotofruit('https://images.api-onepiece.com/fruits/' + props.filename); 
    }, [props.filename]);

    return (
      <>
        <Link to={idLien}>
          <img src={photofruit} alt="fruit" width="150px" className="fruitHover m-2"/>
        </Link> 
      </>
    );
  }
  
  export default Fruit;