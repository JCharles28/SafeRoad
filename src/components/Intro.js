import "./components.css";
import myImage from "../logo-vigiroad.png";

// puis dans votre composant :

export default function Intro() {
  return (
    <div className="Intro">
      <div className="container">
        <p>
          Bienvenue sur le site officiel de <span className="sf">VigiRoad</span>
          , la route de demain 🚘🛣️
        </p>
        <img className="ef-retro" src={myImage} alt="VigiRoad" />
      </div>
    </div>
  );
}
