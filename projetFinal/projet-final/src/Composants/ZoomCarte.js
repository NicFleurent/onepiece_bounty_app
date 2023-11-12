import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './ZoomCarte.css';

function ZoomCarte(props) {

    const [photofruit, setPhotofruit] = useState([]);
    const [nomfruit, setNomfruit] = useState([]);

    useEffect(() => {
        if(!!props.fruit_id) {
            if(props.fruit_filename == null){
                setPhotofruit('/img/fruitManquant.webp');
            }
            else{
                setPhotofruit('https://images.api-onepiece.com/fruits/' + props.fruit_filename);
            }

            setNomfruit(props.fruit_roman_name);

        }
        else{
            setPhotofruit('/img/pasDeFruit.png');
            setNomfruit("N'en possède pas")
        }
        
    }, [props.fruit_id, props.fruit_filename, props.fruit_roman_name]);

    return (
      <>
        <div className='NavBarFantome'></div>
        <div className="container mt-2 bg-success rounded shadow text-white p-1 mb-3">
          <div className="row">
            <div className="col">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-4 p-0">
                    <img src={props.photo} alt="personnage" className="img-fluid rounded m-md-3" />
                  </div>
                  <div className="col-xl-8 ps-5">
                    <div className="fs-1">{props.french_name}</div>
                    <div className="fs-3 mt-3 text-start">Prime : {props.bounty}<img src="/img/berryWhite.png" alt="berry" height="25px" width="20px" className='ms-1' /></div>
                    <div className="fs-4 text-start">Fruit du démon : <img src={photofruit} alt="fruit" height="25px" width="25px" className='me-1' />{nomfruit}</div>
                    <div className="fs-5 text-start">Forme de Haki maitrisée : {props.haki}</div>
                    <div className="fs-5 mt-3 text-start">Rôle : {props.job}</div>
                    <div className="fs-5 text-start">Équipage : {props.crew}</div>
                    <div className="fs-5 mt-3 text-start">Grandeur : {props.size}</div>
                    <div className="fs-5 text-start">Âge : {props.age}</div>
                    <div className="fs-5 mt-4 text-start">Actuellement dans la série, ce personnage est {props.status}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/cardgame" id="boutonRetour" className="sansLigne bg-success rounded text-white p-2">Retour à la liste des cartes</Link>
        
      </>
      
    );
  }
  
  export default ZoomCarte;