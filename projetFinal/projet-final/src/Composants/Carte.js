import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Carte.css';

function Carte(props) {

    const [photofruit, setPhotofruit] = useState([]);
    const [nomfruit, setNomfruit] = useState([]);
    let idLien = "/zoomCarte/" + props.id;

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
        <Link to={idLien} id='carte' className='m-2 bg-success rounded text-white p-1'>
            <b className="fs-4">{props.french_name}</b><br/>
            <img src={props.photo} alt="perso" className="rounded" height="150px" width="150px" />
            <div className='container-fluid'>
                <div className='row mt-1'>
                    <div className='col'>
                        <img src={photofruit} alt="fruit" height="20px" width="20px" className='me-1' />{nomfruit}
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col'>
                        {props.job} de {props.crew}
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col fs-5'>
                        {props.bounty}<img src="/img/berryWhite.png" alt="berry" height="15px" width="15px" className='ms-1' />
                    </div>
                </div>
            </div>
        </Link>
    );
  }
  
  export default Carte;