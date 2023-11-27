import "./components.css";

import { useState } from "react";

export default function Forms() {
  const [nom, setNomPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="container ctn-height">
      <div className="Forms">
        <h1>Formulaire de contact</h1>
        <p>Vous souhaitez nous contacter ?</p>{" "}
        <p>
          Remplissez le formulaire ci-dessous et notre équipe vous répondrons au
          plus vite !
        </p>
        <form
          action="https://formsubmit.co/contact.infojeancharles@gmail.com"
          method="POST"
        >
          <div className="block-form">
            <label for="name">Nom et prénom</label>
            <input
              type="text"
              placeholder=""
              name="name"
              id="name"
              autocomplete="off"
              required
              value={nom}
              onChange={(e) => setNomPrenom(e.target.value)}
            />
          </div>

          <div className="block-form">
            <label for="e-mail">E-mail</label>
            <input
              type="text"
              placeholder=""
              name="e-mail"
              id="e-mail"
              autocomplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="block-form">
            <label for="objet">Objet</label>
            <input
              type="text"
              placeholder=""
              name="objet"
              id="objet"
              autocomplete="off"
              required
              value={objet}
              onChange={(e) => setObjet(e.target.value)}
            />
          </div>

          <div className="block-form">
            <label for="objet">Description</label>
            <textarea
              placeholder=""
              name="description"
              id="description"
              autocomplete="off"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="btn-envoyer" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
