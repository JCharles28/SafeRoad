import React from "react";
import "./components.css";
import logoSR from "../logo-vigiroad.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "ls-projet",
    };
  }

  handleSectionClick = (part) => {
    this.setState({
      activeSection: part,
    });
  };
  render = () => {
    return (
      <header>
        <nav>
          <ul>
            <img className="" src={logoSR} alt="logo" />

            <li key="ls-projet">
              <button
                onClick={() => this.props.handleSectionClick("ls-projet")}
                className={`btn-style ${
                  this.state.activeSection === "ls-projet" ? "active" : ""
                }`}
              >
                Projet
              </button>
            </li>

            <li key="ls-equipe">
              <button
                onClick={() => this.props.handleSectionClick("ls-equipe")}
                className={`btn-style ${
                  this.state.activeSection === "ls-equipe" ? "active" : ""
                }`}
              >
                Equipe
              </button>
            </li>

            <li key="ls-partenaires">
              <button
                onClick={() => this.props.handleSectionClick("ls-partenaires")}
                className={`btn-style ${
                  this.state.activeSection === "ls-partenaires" ? "active" : ""
                }`}
              >
                Partenaires
              </button>
            </li>

            <li key="ls-mentorat">
              <button
                onClick={() => this.props.handleSectionClick("ls-mentorat")}
                className={`btn-style ${
                  this.state.activeSection === "ls-mentorat" ? "active" : ""
                }`}
              >
                Mentorat
              </button>
            </li>

            <li key="ls-sensibilisation">
              <button
                onClick={() =>
                  this.props.handleSectionClick("ls-sensibilisation")
                }
                className={`btn-style ${
                  this.state.activeSection === "ls-sensibilisation"
                    ? "active"
                    : ""
                }`}
              >
                Sensibilisation
              </button>
            </li>

            <li key="ls-contact">
              <button
                onClick={() => this.props.handleSectionClick("ls-contact")}
                className={`btn-style ${
                  this.state.activeSection === "ls-contact" ? "active" : ""
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
}
