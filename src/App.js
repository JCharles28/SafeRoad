import React from "react";
import Forms from "./components/Forms";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Teams from "./components/Teams";
import Project from "./components/Project";
import PhraseAccroche from "./components/PhraseAccroche";
import Partners from "./components/Partners";
import Mentors from "./components/Mentor";
import Sensibilisation from "./components/Sensibilisation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "ls-projet",
      parts: {
        "ls-projet": null,
        "ls-equipe": null,
        "ls-contact": null,
        "ls-partenaires": null,
        "ls-mentorat": null,
        "ls-sensibilisation": null,
      },
      showNewComponent: false, // Ajout de l'état showNewComponent
    };
  }

  componentDidMount() {
    const parts = Object.keys(this.state.parts).reduce((acc, key) => {
      acc[key] = document.getElementById(key);
      return acc;
    }, {});
    this.setState({ parts });
  }

  handleSectionClick = (part) => {
    const targetSection = this.state.parts[part];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
    this.setState({
      activeSection: part,
    });
  };

  render() {
    return (
      <div className="App">
        <Header handleSectionClick={this.handleSectionClick} />

        <Intro />

        <div id="ls-projet" className={this.state.activeSection}>
          <Project />
        </div>

        <div id="ls-equipe" className={this.state.activeSection}>
          <Teams />
        </div>

        <div id="ls-partenaires" className={this.state.activeSection}>
          <Partners />
        </div>

        <div id="ls-mentorat" className={this.state.activeSection}>
          <Mentors />
        </div>

        <PhraseAccroche />

        <div id="ls-sensibilisation" className={this.state.activeSection}>
          <Sensibilisation />
        </div>

        <div id="ls-contact" className={this.state.activeSection}>
          <Forms />
        </div>
      </div>
    );
  }
}
