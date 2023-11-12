import React, { useState } from 'react';
import Carte from './Carte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function CardGame(props) {
    const [rechercheNom, setRechercheNom] = useState("");

    const [fruits]= [props.fruits];
    const [crews]= [props.crews];
    const [persos]= [props.persos];

    const handleChange = (event) => {
      setRechercheNom(event.target.value);
    }

    let i=0;

    return (
      <>
        <div className='NavBarFantome'></div>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className='text-success' />
        <input className='m-2' type="text" value={rechercheNom} onChange={handleChange}></input>
        <div className='container-fluid'>
          <div className='row'>
            
            {persos.map((perso,index) => (
              (perso.french_name.includes(rechercheNom))
              &&
              (
                <div className='col-xl-2 col-lg-3 col-md-4 d-flex justify-content-center' key={index}>
                  <div className='d-none'>{i++}</div>
                  <Carte 
                    key={perso.id}
                    id={perso.id}
                    french_name={perso.french_name}
                    job={perso.job}
                    bounty={perso.bounty}
                    crew_id={perso.crew_id}
                    fruit_id={perso.fruit_id}
                    photo={perso.photo}
                    crew={crews[perso.crew_id - 1] && crews[perso.crew_id - 1].french_name}
                    fruit_filename={fruits[perso.fruit_id - 1] && fruits[perso.fruit_id - 1].filename}
                    fruit_roman_name={fruits[perso.fruit_id - 1] && fruits[perso.fruit_id - 1].roman_name}
                  />
                </div>
              )
            ))}
            {(i===0) && <b className='mt-3 fs-2'>Aucun résultat</b>}
          </div>
          
        </div>
        
      </>
    );
  }
  
  export default CardGame;