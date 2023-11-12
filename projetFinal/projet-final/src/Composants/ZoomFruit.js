import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Fruit.css'
import './ZoomFruit.css'

function ZoomFruit(props) {
    const [photofruit, setPhotofruit] = useState([]);
    const [nomPerso, setNomPerso] = useState([]);

    const [persos]= [props.persos];

    useEffect(() => {
      setPhotofruit('https://images.api-onepiece.com/fruits/' + props.filename); 
    }, [props.filename]);

    useEffect(() => {
      for(let i=0; i<persos.length ;i++){
        if(persos[i].fruit_id === props.id){
          setNomPerso(persos[i].french_name);
        }
      }
    }, [props.id, persos]);
    

    return (
      <>
        <div className='NavBarFantome'></div>
        <div className='container mt-2 bg-success rounded shadow text-white p-3 mb-3'>
          <div id="titre">{props.roman_name}</div>
          <div className='fs-4'><b>Nom français :</b> {props.french_name}</div>
          <div className='fs-4'><b>Type :</b> {props.type}</div>
          <div className='fs-4'><b>Possesseur :</b> {nomPerso}</div>
          <div className='fs-5'><b>Description :</b> {props.description}</div>
        </div>
        <Link to="/listefruits"><img src={photofruit} alt="fruit" className="fruitHover m-2"/></Link>
        
      </>
      
    );
  }
  
  export default ZoomFruit;