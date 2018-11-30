import React from "react";
import { render } from "react-dom";
import ActionButton from "./components/ActionButton";
import Display from "./components/Display";
import Title from "./components/Title";

const choseRandomElement = myArray =>
  myArray[Math.floor(Math.random() * myArray.length)];

const answers = [
  "Rosso di sera bel tempo si spera",
  "Una mela al giorno leva il medico di torno"
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answer: null
    };
  }

  selectRandomAnswer = () => {
    this.setState({
      answer: choseRandomElement(answers)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Title label={"8Ball"} />
        <Display value={this.state.answer} placeholder={"You will see"} />
        <ActionButton onClick={this.selectRandomAnswer} label={"CLick me!"} />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
