import React from "react";
import "./components.css";

export default function Sensibilisation() {
  return (
    <div className="container-sensibilisation">
      <h1>Sensibilisation</h1>
      <div>
        <h2>Jeu de sensibilisation</h2>
        <iframe
          src="https://modules.securite-routiere.gouv.fr/module_distracteur.html"
          title="Jeu de sensibilisation Sécurité Routière"
        ></iframe>
      </div>

      <div>
        <h2>Vidéo de sensibilisation</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kVv1eyg2P94"
          title="Vidéo de sensibilisation Sécurité Routière"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
