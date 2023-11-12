import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
      <>
        <div className="container-fluid bg-success p-2 d-none d-md-block barreNavigation border-bottom">
            <div className="row">
                <Link to="/" className="sansLigne col-md-4"><img className="me-2" src="/img/logo.png" alt="logo" height="40px"/></Link>
                <Link to="/cardgame" className="sansLigne col-md-4 p-2">Jeu de carte</Link>
                <Link to="/listefruits" className="sansLigne col-md-4 p-2">Fruits du démon</Link>
            </div>
        </div>
        <div className="container-fluid bg-success p-3 d-md-none d-block barreNavigation border-bottom">
            <div className="row">
                <Link to="/" className="sansLigne col-4"><FontAwesomeIcon icon={faHouse} size="2xl" /></Link>
                <Link to="/cardgame" className="sansLigne col-4"><img className="me-2" src="/img/mugi.png" alt="logo" height="35px"/></Link>
                <Link to="/listefruits" className="sansLigne col-4"><FontAwesomeIcon icon={faAppleWhole} size="2xl" /></Link>
            </div>
        </div>
      </>  
  );
}

export default Navbar;