import "./components.css";
import imgZakaria from "../ressources/img/mentorat-zak.png";
import imgMorad from "../ressources/img/mentorat-morad.png";


const listMentors = [
  {
    name: "Zakaria EL KHAMMAR ",
    role: "Data Scientist, Orange",
    image: imgZakaria,
  },
  {
    name: "Morad ATTIK",
    role: "Co-fondateur d'Evolukid",
    image: imgMorad,
  },
];

export default function Mentors() {
  return (
    <div className="container">
      <h1>Mentorat</h1>

      <p>
        Nous sommes mentorer par des professionnels expérimentés en terme de
        Data et IA.
      </p>
      <p>
        En effet, cet accompagnement nous permet d'être dans les meilleurs
        conditions pour mener à bien notre mission.
      </p>
      <div className="grid-container grid-mentor">
        {listMentors.map((p) => (
          <div className="grid-item" key={p.name}>
            <div className="cadre-img">
              <img src={p.image} alt={p.name} />
            </div>
            <p>{p.name}</p>
            <p>{p.role}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
