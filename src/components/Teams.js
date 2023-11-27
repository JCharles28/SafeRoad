// Teams.js
import "./components.css";
import naj from "../ressources/img/1-najlae.JPG";
import walid from "../ressources/img/3-walid.JPG";
import jean from "../ressources/img/4-jean-charles.JPG";
import zak from "../ressources/img/2-zakaria.jpg";

const teamMembers = [
  {
    name: "Najlae CHILOUET BEN JAMAA",
    role: "Data Analyst",
    image: naj, // Utilise le chemin d'accès direct ici
  },
  {
    name: "Zakarya BOUSSARHANE",
    role: "Développeur informatique",
    image: zak, // Laisse-le vide s'il n'y a pas d'image
  },

  {
    name: "Jean-Charles MCHANGAMA",
    role: "Développeur informatique",
    image: jean, // Utilise le chemin d'accès direct ici
  },

  {
    name: "Walid ATIK",
    role: "Chef de projet",
    image: walid, // Utilise le chemin d'accès direct ici
  },
];

export default function Teams() {
  return (
    <div className="container">
      <h1>
        Equipe <span className="sf">VigiRoad</span>
      </h1>
      <p>
        Notre équipe est composée de profils variés : développeurs, chef de
        projet, data analyst.
      </p>
      <p>
        En effet, nos aptitudes complémentaires nous ont permis de tirer le
        meilleur les uns des autres.
      </p>
      {/* <p>
        Notre objectif est de vous proposer une solution innovante pour
        améliorer la sécurité routière.🚦
      </p> */}
      <div className="grid-container grid-team">
        {teamMembers.map((member) => (
          <div className="grid-item" key={member.name}>
            <div className="cadre-img">
              <img src={member.image} alt={member.name} />
            </div>
            <p>{member.name}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
