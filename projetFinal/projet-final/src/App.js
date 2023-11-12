import Navbar from './Composants/Navbar';
import Accueil from './Composants/Accueil';
import CardGame from './Composants/CardGame';
import Listefruit from './Composants/ListeFruit';
import ZoomCarte from './Composants/ZoomCarte';
import ZoomFruit from './Composants/ZoomFruit';
import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
  const [persos, setPersos] = useState([]);
  const [persosReel, setPersosReel] = useState([]);
  const [crews, setCrews] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [idLienCarte] = useState([]);
  const [idLienFruit] = useState([]);

    /*Je fais tous mes fetchs sur la page app car mon API block les demandes si il y en a trop. Ça permet de fetcher beaucoup moins et de faire que tout fonctionne.*/
    useEffect(() => {
        fetch('/bd/onepieceapi.json')
        .then((response) => response.json())
        .then((data) => setPersos(data))
    }, []);

    useEffect(() => {
      fetch('https://api.api-onepiece.com/crews/')
              .then((response) => response.json())
              .then((data) => setCrews(data))
      
    }, []);

    useEffect(() => {
      fetch('https://api.api-onepiece.com/fruits/')
              .then((response) => response.json())
              .then((data) => setFruits(data))
      
    }, []);

    useEffect(() => {
      fetch('https://api.api-onepiece.com/characters/')
              .then((response) => response.json())
              .then((data) => setPersosReel(data))
      
    }, []);

    useEffect(() => {
      for(let i=0 ; i<persos.length ; i++){
        idLienCarte[i] = "/zoomCarte/" + persos[i].id;
      }
    }, [idLienCarte, persos]);

    useEffect(() => {
      for(let i=0 ; i<fruits.length ; i++){
        if(fruits[i].filename != null){
          idLienFruit[i] = "/zoomFruit/" + fruits[i].id;
        }
      }
    }, [idLienFruit, fruits]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Accueil/>}/>
        <Route 
          path="/cardgame" 
          element={<CardGame 
                      persos={persos}
                      crews={crews}
                      fruits={fruits}
                    />
                  }
        />
        <Route 
          path="/listefruits" 
          element={<Listefruit key={3}
                      fruits={fruits}
                    />
                  }
        />
        {persos.map((perso,index) => (
                <Route 
                  key={index}
                  path={idLienCarte[perso.id-1]} 
                  element={<ZoomCarte
                              id={perso.id}
                              french_name={perso.french_name}
                              job={perso.job}
                              size={perso.size}
                              age={perso.age}
                              bounty={perso.bounty}
                              status={perso.status}
                              crew_id={perso.crew_id}
                              fruit_id={perso.fruit_id}
                              photo={perso.photo}
                              haki={perso.haki}
                              crew={crews[perso.crew_id - 1] && crews[perso.crew_id - 1].french_name}
                              fruit_filename={fruits[perso.fruit_id - 1] && fruits[perso.fruit_id - 1].filename}
                              fruit_roman_name={fruits[perso.fruit_id - 1] && fruits[perso.fruit_id - 1].roman_name}
                              persos={persos}
                              crews={crews}
                              fruits={fruits}
                    />}
                  />
        ))}
        {fruits.map((fruit,index) => (
          (fruit.filename != null) &&
          (
            <Route
              key={index}
              path={idLienFruit[fruit.id-1]} 
              element={<ZoomFruit
                          id={fruit.id}
                          filename={fruit.filename}
                          french_name={fruit.french_name}
                          roman_name={fruit.roman_name}
                          type={fruit.type}
                          description={fruit.description}
                          persos={persosReel}
                        />}
            />
          )
        ))}
        
      </Routes>
      <div className='text-secondary mt-2'>Programme par Nicolas Fleurent | API par Nathan Dierickx - API One Piece - <a id='lienApi' className='text-secondary' href='https://api-onepiece.com/' target='blank'>https://api-onepiece.com/</a></div>
    </div>
  );
}

export default App;
