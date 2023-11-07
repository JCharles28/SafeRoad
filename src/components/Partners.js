import "./components.css";
import imgOrange from "../ressources/img/img-orange.png";
import imgEssonne from "../ressources/img/img-essonne.jpg";
import imgBanqueTerritoire from "../ressources/img/img-banque-territoire.jpg";

const listPartners = [
  {
    name: "Orange",
    role: "Leader français en télécommunications",
    image: imgOrange,
  },
  {
    name: "Département de l'Essonne",
    role: "",
    image: imgEssonne,
  },
  {
    name: "Banque de territoire",
    role: "",
    image: imgBanqueTerritoire,
  },
];

export default function Partners() {
  return (
    <div className="container">
      <h1>Partenaires</h1>

      <p>
        Nous avons la chance d'être accompagné et soutenu par des partenaires de
        qualité : le monument français en télécommunication, Orange.
      </p>
      <div className="grid-container grid-partner">
        {listPartners.map((p) => (
          <div className="grid-item" key={p.name}>
            <div className="cadre-img">
              <img src={p.image} alt={p.name} />
            </div>
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
