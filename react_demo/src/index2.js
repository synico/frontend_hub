import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import app from './react_ctx';

// import { add } from './math.js';

function FancyBoarder(props) {
  return (
    <div className={'FancyBoarder FancyBoarder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  import("./math").then(math => {
    console.log(math.add(10, 12));
  });
  return (
    <FancyBoarder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBoarder>
  );
}

////////////////////////////////////////////////////

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('name has been submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: 
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    );
  }

}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数：
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  // <NameForm />,
  // <Reservation />,
  <WelcomeDialog />,
  // <app.App />, TODO need to export something
  document.getElementById('root')
);