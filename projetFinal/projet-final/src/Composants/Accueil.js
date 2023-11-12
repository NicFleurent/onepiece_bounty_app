import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAppleWhole, faGripLines } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './Accueil.css';

function Accueil() {
    const [courrielInscriptionValue, setCourrielInscriptionValue] = useState("");
    const [prenomInscriptionValue, setPrenomInscriptionValue] = useState("");
    const [nomInscriptionValue, setNomInscriptionValue] = useState("");
    const [reponsePrenom, setReponsePrenom] = useState("");
    const [reponseNom, setReponseNom] = useState("");
    const [reponseCourriel, setReponseCourriel] = useState("");

    const handleChangePrenom = (event) => {
      setPrenomInscriptionValue(event.target.value);
    }

    const handleChangeNom = (event) => {
      setNomInscriptionValue(event.target.value);
    }

    const handleChangeCourriel = (event) => {
      setCourrielInscriptionValue(event.target.value);
    }

    const handleClick = (event) => {
      let inscriptionValid = true;

      if(prenomInscriptionValue === ""){
        inscriptionValid = false;
        setReponsePrenom("Le champ du prenom doit être remplis");
      }
      else{
        setReponsePrenom("");
      }

      if(nomInscriptionValue === ""){
        inscriptionValid = false;
        setReponseNom("Le champ du nom doit être remplis");
      }
      else{
        setReponseNom("");
      }
      
      let comparateur = /[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]+/g;

      if(!comparateur.test(courrielInscriptionValue)){
        inscriptionValid = false;
        setReponseCourriel("L'adresse courriel n'est pas valide");
      }
      else{
        setReponseCourriel("");
      }

      if(inscriptionValid){
        setReponseCourriel("Merci de vous être abonnez à notre info-lettre!");
      }

    }
    

    return (
      <>
        <div className='container-fluid bg_logo p-3 h-100 d-inline-block'>
        <div className='NavBarFantome'></div>
          <div className='row text-center aling-items-center text-white h-75'>
            <div className='offset-md-4 col-md-4 col-12'>
              <h1 className='mt-md-5 mt-3'>One Piece</h1>
            </div>
          </div>
          <div className='row text-center aling-items-center text-white'>
            <div className='offset-xl-3 col-xl-6 col-12'>
              <FontAwesomeIcon icon={faGripLines} size="2xl" className="text-success" />
              <p className='fs-3 mt-md-3 mt-3'>Bienvenue dans l'univers fascinant du plus grand manga contemporain</p>
            </div>
          </div>
        </div>

        <div className="container-fluid g-0">
          <div className="row text-center m-0 p-0">
              <div className="col-lg-6 col-12 bg-success text-white px-3 py-5 h-50">
                  <h1 className="mb-4">Les personnages</h1>
                  <FontAwesomeIcon icon={faAddressCard} size="2xl" />
                  <p className="mt-4 fs-4">Ici vous trouverez une liste des meilleurs personnages de One Piece sous forme de carte. Vous pourez alors cliquer sur chacune d'elle pour avoir plus d'information.</p>
                  <Link to='/cardGame' className="btn btnEnvoyer bg-white rounded-pill px-4 mt-4 text-success"><b className="fs-4">Personnages</b></Link>
              </div>
              <div className="col-lg-6 col-12 px-3 py-5 text-success h-50">
                  <h1 className="mb-4">Les fruits</h1>
                  <FontAwesomeIcon icon={faAppleWhole} size="2xl" />
                  <p className="mt-4 fs-4">Ici vous trouverez les fruits du démon dont-on connait l'apparence. Parcourez les et cliquez dessus lorsqu'ils grossissent pour en apprendre plus.</p>
                  <Link to='/listefruits' className="btn btnEnvoyer bg-success text-white rounded-pill px-4 mt-4"><b className="fs-4">Fruits</b></Link>
              </div>
          </div>
        </div>
        
        <div className="container-fluid text-white g-0">
          <div className="row text-center m-0 p-0">
            <div className="col-lg-6 d-lg-block d-none">
              <div className="col-12 my-2">
                <span className="fs-2 text-success">Un aperçu de la série</span>
              </div>
              <iframe id="videoXL" className="mt-2 rounded" width="560" height="315" src="https://www.youtube.com/embed/xylh_sJAYdc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="col-lg-6 col-12 bg-success">
              <div className="col-12 mt-3">
                <span className="fs-2">Vous voulez être au courant de nos nouveautés?</span>
              </div>
              <div className="col-12 mt-3">
                <span className="fs-3">Inscrivez-vous ici :</span>
              </div>
              <div className="offset-xl-3 col-xl-6">
                <div>Prenom :</div>
                <input type="text" className="form-control mb-4" id="inscriptionPrenom" value={prenomInscriptionValue} onChange={handleChangePrenom} placeholder="Prenom"/>
              </div>
              <div className="offset-xl-3 col-xl-6">
                <div>Nom :</div>
                <input type="text" className="form-control mb-4" id="inscriptionNom" value={nomInscriptionValue} onChange={handleChangeNom} placeholder="Nom"/>
              </div>
              <div className="offset-xl-3 col-xl-6">
                <div>Adresse courriel :</div>
                <input type="email" className="form-control mb-4" id="inscriptionCourriel" value={courrielInscriptionValue} onChange={handleChangeCourriel} placeholder="name@example.com"/>
              </div>
              <div className="offset-xl-3 col-xl-6 mb-4">
                <div className="btn btnEnvoyer bg-white rounded-pill text-success px-4 mt-4 fs-5 fw-bold" onClick={handleClick}>S'incrire</div>
                <div className="mt-3 fs-5">{reponsePrenom}</div>
                <div className="mt-3 fs-5">{reponseNom}</div>
                <div className="mt-3 fs-5">{reponseCourriel}</div>
              </div>
            </div>
            
            <div className="col-xl-6 d-xxl-none d-xl-none d-lg-none d-md-block d-none">
              <div className="col-12 my-2">
                <span className="fs-2 text-success">Un aperçu de la série</span>
              </div>
              <iframe className="mt-2 rounded" width="560" height="315" src="https://www.youtube.com/embed/xylh_sJAYdc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
          </div>
          
        </div>
        
        <div className="container-fluid g-0 d-md-block d-none">
          <div className="row g-0">
              <div className="col-xl-4 col-md-6">
                  <img src="/img/bg_nakama3.jpg" alt="nakama3" className="img-fluid"/>
              </div>
              <div className="col-xl-4 col-md-6">
                  <img src="/img/bg_fruit.jpg" alt="nakama2" className="img-fluid"/>
              </div>
              <div className="col-xl-4 col-md-6">
                  <img src="/img/bg_trio.webp" alt="trio" className="img-fluid"/>
              </div>
              <div className="col-xl-4 col-md-6">
                  <img src="/img/bg_nakama4.jpg" alt="nakama4" className="img-fluid"/>
              </div>
              <div className="col-xl-4 col-md-6">
                  <img src="/img/bg_nakama2.png" alt="nakama2" className="img-fluid"/>
              </div>
              <div className="col-xl-4 col-md-6">
                  <img src="/img/bg_nakama.jpg" alt="nakama" className="img-fluid"/>
              </div>
          </div>
      </div>
      </>
    );
  }
  
  export default Accueil;