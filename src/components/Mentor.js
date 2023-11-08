import "./components.css";
// import imgZakaria from "";
// import imgVincent from "";


const listMentors = [
  {
    name: "Zakaria EL KHAMMAR ",
    role: "Data Scientist, Orange",
    // image: imgZakaria,
  },
  {
    name: "Vincent RENARD",
    role: "Expert en Data & IA, Freelance",
    // image: imgVincent,
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
