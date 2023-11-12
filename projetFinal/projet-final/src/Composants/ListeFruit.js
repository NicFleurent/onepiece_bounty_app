import React, { useState } from 'react';
import Fruit from './Fruit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Listefruit(props) {
    const [rechercheNom, setRechercheNom] = useState("");
    const [fruits]= [props.fruits];

    const handleChange = (event) => {
      setRechercheNom(event.target.value);
    }

    let i=0;

    return (
      <>
        <div className='NavBarFantome'></div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className='text-success' />
          <input className='m-2' type="text" value={rechercheNom} onChange={handleChange}></input>
        </div>
        {fruits.map((fruit,index) => (
          (fruit.filename != null) && ((fruit.french_name.includes(rechercheNom)) || (fruit.roman_name.includes(rechercheNom))) &&
          (
            <span key={index}>
              <div className='d-none'>{i++}</div>
              <Fruit
                key={fruit.id}
                id={fruit.id}
                filename={fruit.filename}
              />
            </span>
          )
        ))}
        {(i===0) && <b className='mt-3 fs-2'>Aucun résultat</b>}
      </>
    );
  }
  
  export default Listefruit;