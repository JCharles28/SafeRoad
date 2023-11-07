import "./components.css";
import myImage from '../img-sf.png';

// puis dans votre composant :

export default function Intro() {
  return (
    <div className="Intro">
      <div className="container">
        <p>
          Bienvenue sur le site officiel du projet révolutionnaire <span className="sf">SaferRoad</span> !
        </p>
        <img className="ef-retro" src={myImage} alt="SaferRoad" />
      </div>
      </div>
  );
}
