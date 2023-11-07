import "./components.css";

export default function Project() {
    return (
      <div className="container">
        <h1>Projet</h1>
        <p className="description-project">
          Le projet <span className="sf">SaferRoad</span> est un projet qui a pour but de réduire le nombre
          d'accidents de la route. Pour cela, nous avons créé un système
          d'intelligence artificielle qui permet de détecter les comportements
          à risque des conducteurs. Ce système est basé sur des caméras
          installées dans les voitures. Il est capable de détecter les
          comportements à risque tels que le non-respect des distances de
          sécurité, le non-respect des limitations de vitesse, le non-respect
          des feux de signalisation, etc. Lorsqu'un comportement à risque est
          détecté, le système envoie une alerte au conducteur pour l'avertir du
          danger. Si le conducteur ne réagit pas, le système peut prendre le
          contrôle de la voiture pour éviter l'accident.
        </p>
        <p className="description-project">
          Le système est composé de deux parties : une partie logicielle et une
          partie matérielle. La partie logicielle est composée d'un logiciel
          d'intelligence artificielle qui permet de détecter les comportements à
          risque. La partie matérielle est composée d'un système embarqué qui
          permet de communiquer avec le logiciel d'intelligence artificielle et
          d'envoyer les alertes au conducteur.
        </p>
        <p className="description-project">
          Le système est actuellement en cours de développement. Il sera
          disponible dans les prochaines semaines.
        </p>
      </div>
  );
}
